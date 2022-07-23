import { IFieldObj } from 'utils/helpers.interfaces';

export interface ContactsFormProps {
  fieldsObj: IFieldObj;
  idCompany: string;
  close: () => void;
}
