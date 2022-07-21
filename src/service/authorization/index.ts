import { URL } from '../../constants/urls';
import api from '../api';

export async function getToken() {
  const url = `${URL.AUTH}alex`;
  const response = await api.get(url);
  return response;
}
