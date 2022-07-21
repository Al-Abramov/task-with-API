import { URL } from '../../constants/urls';
import api from '../api';

export async function setImage(id: string) {
  const url = `${URL.COMPANIES}/${id}/${URL.IMAGE}`;
  const response = await api.post(url);
  return response;
}

export async function deleteImage(id: string) {
  const url = `${URL.COMPANIES}/${id}/${URL.IMAGE}`;
  const response = await api.delete(url);
  return response;
}
