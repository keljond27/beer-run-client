import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2727/api/',
  timeout: 5000,
});

export const apiRequest = async (config: AxiosRequestConfig): Promise<any> => {
  try {
    const res = await api(config);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}