import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import { z } from 'zod';
import { validationErrorData } from '../../services/constants';
import { IUser } from '../../services/interfaces/user.interface';
import { createUser, editUser } from '../../services/requests';
import Notification, { Error } from '../Notification';
import { CleanUser, Mode } from './UserModal';

interface Props {
  cancelButtonRef: React.MutableRefObject<null>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  mode?: Mode;
  user?: CleanUser;
}

interface InitialState {
  username: string;
  email: string;
  address: string;
  cpf: string;
  phone: string;
  password?: string;
}

const initialState: InitialState = {
  username: '',
  email: '',
  address: '',
  cpf: '',
  phone: '',
  password: '',
};

const userSchema = z.object({
  username: z.string().min(3).max(255),
  email: z.string().email().min(3).max(255),
  address: z.string().min(3).max(255),
  cpf: z.string().length(11),
  phone: z.string().length(11),
  password: z.string().min(3).max(255),
});

export default function Form({ cancelButtonRef, setOpen, mode, user }: Props) {
  const [form, setForm] = useState(initialState);
  const [validationError, setValidationError] = useState(false);
  const [errorData, setErrorData] = useState<Error>();

  const formRef = useRef(form);

  useEffect(() => {
    if (mode === 'edit' && user) {
      if (user !== formRef.current) {
        setForm(user);
        formRef.current = user;
      }
    }
  }, [mode, user]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitForm = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      if (mode === 'edit' && user) {
        userSchema.omit({ password: true }).parse(form);
        await editUser(user._id, form as CleanUser);
      } else {
        userSchema.parse(form);
        await createUser(form as IUser);
      }
      setOpen(false);
    } catch (error) {
      setErrorData(validationErrorData);
      setValidationError(true);
    }
  };

  return (
    <>
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
              {mode === 'create' && (
                <div className="sm:col-span-3">
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
                      value={form.password}
                      onChange={handleChange}
                      autoComplete="password"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              )}

              <div className="sm:col-span-4">
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
              onClick={submitForm}
            >
              {mode === 'edit' ? 'Atualizar' : 'Cadastrar'}
            </button>
          </div>
        </div>
      </form>
      {validationError && (
        <Notification
          error={errorData as Error}
          icon={{ icon: ExclamationCircleIcon, color: 'text-red-500' }}
          show={validationError}
          setShow={setValidationError}
        />
      )}
    </>
  );
}
