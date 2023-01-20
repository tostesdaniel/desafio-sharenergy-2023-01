import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

interface Props {
  cancelButtonRef: React.MutableRefObject<null>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const initialState = {
  username: '',
  email: '',
  address: '',
  cpf: '',
  phone: '',
};

export default function Form({ cancelButtonRef, setOpen }: Props) {
  const [form, setForm] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Cadastro de usuários
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Preencha todos os campos.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Nome de usuário
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={form.username}
                  onChange={handleChange}
                  autoComplete="username"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Endereço de email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Endereço
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={form.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="cpf"
                className="block text-sm font-medium text-gray-700"
              >
                CPF
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  value={form.cpf}
                  onChange={handleChange}
                  autoComplete="on"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefone
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel-national"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => setOpen(false)}
            ref={cancelButtonRef}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
}
