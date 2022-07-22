import { URL } from '../../constants/urls';
import api from '../api';

export async function getToken(name: string) {
  const url = `${URL.AUTH}${name}`;
  const response = await api.get(url);
  return response;
}
