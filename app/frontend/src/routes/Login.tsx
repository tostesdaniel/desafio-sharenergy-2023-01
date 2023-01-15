import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginCover from '../assets/images/login-cover.jpg';
import logo from '../logo.png';
import { requestLogin } from '../services/requests';

const initialLoginState = {
  username: 'desafiosharenergy',
  password: 'sh@r3n3rgy',
};

export default function Login() {
  const [login, setLogin] = useState(initialLoginState);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLogin((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    requestLogin(login)
      .then((response) => {
        saveToken(response.data);
        navigate('/users/random');
      })
      .catch((error) => console.log(error));
  };

  const saveToken = (token: string) => localStorage.setItem('token', token);

  return (
    <div className="flex min-h-full">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img className="h-12 w-auto" src={logo} alt="Logo" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Acesse sua conta
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome de usuário
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                      onChange={handleChange}
                      value={login.username}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Senha
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                      onChange={handleChange}
                      value={login.password}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Lembrar de mim
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-yellow-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    onClick={handleSubmit}
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={loginCover}
          alt="Painéis solares e ao horizonte o nascer do sol"
        />
      </div>
    </div>
  );
}
