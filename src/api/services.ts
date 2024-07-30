import api from './api';
import { Endpoints } from './Endpoints';

export async function getCountries() {
  const { data } = await api.get(Endpoints.ALL);
  return data;
}

export async function getCountryByName(value?: string) {
  const { data } = await api.get(`${Endpoints.NAME}/${value?.toLowerCase().trim()}`);
  return data[0];
}
