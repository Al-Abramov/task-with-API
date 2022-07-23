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
  type: string[];
}

export interface IContract {
  [key: string]: string;
}

export interface IFotos {
  name: string;
  filepath: string;
  thumbpath: string;
}

export type UpdateContacts = Record<string, string>;
