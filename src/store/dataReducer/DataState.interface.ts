import { ICompanyData } from '../../service/dataCompany/CompanyData.interface';

export interface DataState {
  name: string;
  isLoading: boolean;
  companyData: ICompanyData | test;
}

type test = [];
