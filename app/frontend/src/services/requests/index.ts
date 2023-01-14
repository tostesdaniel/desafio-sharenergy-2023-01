import axios from 'axios';
import Login from '../interfaces/login.interface';

const baseUrl = 'http://localhost:3001/';
const randomUserUrl = 'https://randomuser.me/api/';

export const requestLogin = (data: Login) =>
  axios.post(`${baseUrl}auth/login`, data);

export const requestRandomUsers = () =>
  axios.get(`${randomUserUrl}?results=5000&nat=br&seed=desafiosharenergy`);
