import { Store } from '@reduxjs/toolkit';
import { AxiosStatic } from 'axios';
import { RootState } from '../store';


export function authInterceptor(axios: AxiosStatic, store: Store<RootState>) {
  axios.defaults.baseURL = `http://localhost:5000`;
  axios.interceptors.request.use((config) => {
    const token = store.getState().user.token;
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}
