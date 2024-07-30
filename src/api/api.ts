import axios from 'axios';

export const baseUrl = 'https://restcountries.com/v3.1';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
