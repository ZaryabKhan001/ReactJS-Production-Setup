import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

export const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true, // for cookies
  timeout: 10000
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.error('Unauthorized - maybe redirect to login');
      }
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      console.error('No response received from server', error.request);
    } else {
      console.error('Axios error', error.message);
    }
    return Promise.reject(error);
  }
);
