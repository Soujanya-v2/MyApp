import axios from 'axios';

const HTTP_UNAUTHORIZED = 401;

const BASE_API_URL = 'https://reqres.in/api/login';
const LOGIN_API_URL = 'https://reqres.in/api/login';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Request made and server responded
      const errorResponse = error.response;
      if (
        errorResponse.status === HTTP_UNAUTHORIZED &&
        errorResponse.config.url !== LOGIN_API_URL
      ) {
        window.location.href = 'login?unauthorized=true';
        return null;
      }
    } 

    return Promise.reject(error);
  }
);

export const isApiError = (error: any): boolean => axios.isAxiosError(error);
export default apiClient;
