import { ICompanyData } from '../../service/dataCompany/CompanyData.interface';

export interface DataState {
  name: string;
  isLoading: boolean;
  companyData: ICompanyData;
  companyContacts: ICompanyContacts;
}

export interface ICompanyContacts {
  id: string;
  lastname: string;
  firstname: string;
  patronymic: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
