import axios from 'axios';
import { API, USERS_API_ROUTES } from '../constants';

interface GetUsersParams {
  term: string;
}

export interface GetUserResponse {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const api = axios.create({
  baseURL: API,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const getUsers = (params?: GetUsersParams) => {
  return axios.get(USERS_API_ROUTES.GET_USERS, {
    params,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
