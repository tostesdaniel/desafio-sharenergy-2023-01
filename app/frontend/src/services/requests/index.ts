import axios from 'axios';
import Login from '../interfaces/login.interface';

const baseUrl = 'http://localhost:3001/';
const randomUserUrl = 'https://randomuser.me/api/';

export const requestLogin = (data: Login) =>
  axios.post(`${baseUrl}auth/login`, data);

export const requestRandomUsers = (page: number = 1) =>
  axios.get(
    `${randomUserUrl}?page=${page}&results=10&nat=br&seed=desafiosharenergy`
  );
