export interface IUser {
  username: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
  password: string;
}

export interface IEditUser extends IUser {
  _id: string;
}
