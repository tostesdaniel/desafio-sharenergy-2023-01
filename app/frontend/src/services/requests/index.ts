import axios from 'axios';
import Login from '../interfaces/login.interface';
import { Buffer } from 'buffer';

const baseUrl = 'http://localhost:3001/';
const randomUserUrl = 'https://randomuser.me/api/';
const httpCatUrl = 'https://http.cat/';

export const requestLogin = (data: Login) =>
  axios.post(`${baseUrl}auth/login`, data);

export const requestRandomUsers = () =>
  axios.get(`${randomUserUrl}?results=1500&nat=br&seed=desafiosharenergy`);

export const requestHttpCat = (code: string) =>
  axios.get(`https://cors-anywhere.herokuapp.com/${httpCatUrl}${code}`, {
    responseType: 'arraybuffer',
    transformResponse: (data) => Buffer.from(data).toString('base64'),
  });
