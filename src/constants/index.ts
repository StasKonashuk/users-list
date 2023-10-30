export const API = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : 'http://localhost:3000';

export const USERS_API_ROUTES = {
  GET_USERS: `${API}`,
};
