import { translate } from '../constants/translate';
import { IContract } from '../service/dataCompany/CompanyData.interface';
import { formattingContract, getFullName, getTransformPhone } from '../utils/helpers';

export const useTransformData = (
  name: string,
  contract: IContract,
  businessEntity: string,
  type: string[]
) => {
  const contr = formattingContract(contract);
  const typeStr = type.map((el) => translate[el]).join(', ');

  return [name, contr, businessEntity, typeStr];
};

export const useTransformContacts = (
  lastname: string,
  firstname: string,
  patronymic: string,
  phone: string,
  email: string
) => {
  const fullName = getFullName(lastname, firstname, patronymic);
  const phoneNumber = getTransformPhone(phone);
  return [fullName, phoneNumber, email];
};
