import axios from 'axios';
import Login from '../interfaces/login.interface';

const baseUrl = 'http://localhost:3001/';

export const requestLogin = (data: Login) =>
  axios.post(`${baseUrl}auth/login`, data);
