import { translate } from '../constants/translate';
import { IContract } from '../service/dataCompany/CompanyData.interface';
import { IFieldObj } from './helpers.interfaces';

export const formattingDate = (str: string) => {
  const date = new Date(str);
  const transformDate = date.toLocaleDateString().split(' ').reverse().join('');
  return transformDate;
};

export const formattingContract = (contract: IContract) => {
  const { no, issue_date: date } = contract;
  const contractStr = `${no} от ${formattingDate(date)}`;
  return contractStr;
};

export const getFullName = (lastname: string, firstname: string, patronymic: string) => {
  return `${lastname} ${firstname} ${patronymic}`;
};

export const splitFullName = (fullName: string) => {
  const obj = {
    lastname: '',
    firstname: '',
    patronymic: '',
  };

  const [lastname, firstname, patronymic] = fullName.split(' ');

  obj.lastname = lastname;
  obj.firstname = firstname;
  obj.patronymic = patronymic;

  return obj;
};

export const getTransformPhone = (phone: string) => {
  const reg = /[()]/gi;

  if (reg.test(phone)) {
    return phone.replace(reg, '').slice(1);
  }

  const firstNum = `+${phone[0]}`;
  const code = `(${phone.slice(1, 4)})`;
  const rest = phone.slice(-7);
  return firstNum + code + rest;
};

export const testEmail = (str: string) => {
  return /@/gi.test(str) ? 'email' : '';
};

export const getFormField = (values: string[], names: string[]) => {
  const fieldObj: IFieldObj = {};

  const fieldValues = values;
  const fieldNames = names;

  fieldNames.map((el, i) => (fieldObj[el] = fieldValues[i]));

  return fieldObj;
};

export const getISODate = (callback: (str: string) => string, field: string) => {
  const dateContract = callback(field).split('от')[1].trim();
  const ISODate = new Date(dateContract).toISOString();
  return ISODate;
};

export const getContract = (callback: (str: string) => string, field: string) => {
  const contract = {
    no: '',
    issue_date: '',
  };

  const contractStr = callback(field);
  const no = contractStr.split('от')[0].trim();
  const date = getISODate(callback, field);

  contract.no = no;
  contract.issue_date = date;

  return contract;
};

export const getTypesArray = (callback: (str: string) => string, field: string) => {
  const types = callback(field).split(',');
  const typesArrTranslate = types.map((type) => translate[type.trim()]);
  return typesArrTranslate;
};
