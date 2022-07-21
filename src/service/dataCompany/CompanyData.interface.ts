export interface UpdateCompany {
  name: string;
  shortName: string;
  businessEntity: string;
  contract: {
    no: string;
    issue_date: string;
  };
  type: string;
}

export interface UpdateContacts {
  lastname: string;
  firstname: string;
  patronymic: string;
  phone: string;
  email: string;
}
