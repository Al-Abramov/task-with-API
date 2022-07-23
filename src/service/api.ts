import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from '../utils/cookie';

const baseURL = 'http://135.181.35.61:2112/';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {};
  }
  const token = getCookie('token');
  config.headers.Authorization = token ? token : '';
  return config;
});

export default api;
