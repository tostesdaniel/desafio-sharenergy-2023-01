import axios from 'axios';
import Login from '../interfaces/login.interface';

const baseUrl = 'http://localhost:3001/';
const randomUserUrl = 'https://randomuser.me/api/';
const dogUrl = 'https://random.dog/woof.json';

export const requestLogin = (data: Login) =>
  axios.post(`${baseUrl}auth/login`, data);

export const requestRandomUsers = () =>
  axios.get(`${randomUserUrl}?results=1500&nat=br&seed=desafiosharenergy`);

export const requestDog = () => axios.get(dogUrl);

export const requestUsers = () => axios.get(`${baseUrl}users`);
