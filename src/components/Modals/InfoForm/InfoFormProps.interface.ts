import { IFieldObj } from 'utils/helpers.interfaces';

export interface InfoFormProps {
  fields: string[];
  name: string[];
  fieldsObj: IFieldObj;
  close: () => void;
}
