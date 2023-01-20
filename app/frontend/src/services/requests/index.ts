import axios from 'axios';
import { CleanUser } from '../../components/Users/UserModal';
import Login from '../interfaces/login.interface';
import { IUser } from '../interfaces/user.interface';

const baseUrl = 'http://localhost:3001/';
const randomUserUrl = 'https://randomuser.me/api/';
const dogUrl = 'https://random.dog/woof.json';

export const requestLogin = (data: Login) =>
  axios.post(`${baseUrl}auth/login`, data);

export const requestRandomUsers = () =>
  axios.get(`${randomUserUrl}?results=1500&nat=br&seed=desafiosharenergy`);

export const requestDog = () => axios.get(dogUrl);

export const requestUsers = () => axios.get(`${baseUrl}users`);

export const requestUser = (id: string) => axios.get(`${baseUrl}users/${id}`);

export const createUser = (data: IUser) => axios.post(`${baseUrl}users`, data);

export const editUser = (id: string, data: CleanUser) =>
  axios.patch(`${baseUrl}users/${id}`, data);
