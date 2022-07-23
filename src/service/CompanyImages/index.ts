import { URL } from '../../constants/urls';
import api from '../api';

export async function setImage(id: string, img: File) {
  const url = `${URL.COMPANIES}/${id}/${URL.IMAGE}`;
  const response = await api.post(
    url,
    { file: img },
    { headers: { 'Content-Type': `multipart/form-data` } }
  );
  return response;
}

export async function deleteImage(id: string, imageName: string) {
  const url = `${URL.COMPANIES}/${id}/${URL.IMAGE}/${imageName}`;
  const response = await api.delete(url);
  return response;
}
