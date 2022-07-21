import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'http://135.181.35.61:2112/';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxleCIsImlhdCI6MTY1ODQxMDg1OCwiZXhwIjoxNjU5MDE1NjU4fQ.hGRe9fvAzfIHRjR-g2IBBwq0JsL9LqkJEIfK9hCDqWY`;
  return config;
});

export default api;
