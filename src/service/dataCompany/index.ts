import { URL } from '../../constants/urls';
import api from '../api';
import { UpdateCompany, UpdateContacts } from './CompanyData.interface';

function getUrl(id: string) {
  const url = `${URL.COMPANIES}/${id}`;
  return url;
}

export async function getCompanyData(id: string) {
  const url = getUrl(id);
  const response = await api.get(url);
  return response;
}

export async function updateCompanyData(id: string, obj: Partial<UpdateCompany>) {
  const url = getUrl(id);

  const response = await api.patch(url, JSON.stringify(obj));
  return response;
}

export async function deleteCompany(id: string) {
  const url = getUrl(id);
  const response = await api.delete(url);
  return response;
}

export async function getContacts(id: string) {
  const url = `${URL.CONTACTS}/${id}`;
  const response = await api.get(url);
  return response;
}

export async function udateContacts(id: string, obj: UpdateContacts) {
  const url = `${URL.CONTACTS}/${id}`;
  const response = await api.patch(url, JSON.stringify(obj));
  return response;
}
