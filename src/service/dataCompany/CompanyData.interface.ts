export interface ICompanyData {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: IContract;
  type: string[];
  status: string;
  photos: IFotos[];
  createdAt: string;
  updatedAt: string;
}

export interface UpdateCompany {
  name: string;
  shortName: string;
  businessEntity: string;
  contract: IContract;
  type: string;
}

type IContract = string[];

export interface IFotos {
  name: string;
  filepath: string;
  thumbpath: string;
}

export interface UpdateContacts {
  lastname: string;
  firstname: string;
  patronymic: string;
  phone: string;
  email: string;
}
