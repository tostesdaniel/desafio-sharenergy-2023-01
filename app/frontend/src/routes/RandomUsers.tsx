import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Notification from '../components/Notification';
import Pagination from '../components/Pagination';
import RandomUser from '../components/RandomUser';
import Searchbar from '../components/Searchbar';
import Title from '../components/Title';
import {
  ApiError,
  RandomUser as IRandomUser,
  RandomUserResponse
} from '../services/interfaces/randomUser.interface';
import { requestRandomUsers } from '../services/requests';

const MAX_RESULTS_PER_PAGE = 10;
const RESULTS_PER_PAGE = 10;

export interface Error {
  statusText: string | undefined;
  errorMessage: string | undefined;
}

export default function RandomUsers() {
  const [usersToRender, setUsersToRender] = useState<IRandomUser[]>([]);
  const [allUsers, setAllUsers] = useState<IRandomUser[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState<Error | null>(null);

  const filterUsers = useCallback(
    (user: IRandomUser) => {
      const userFullName = `${user.name.first} ${user.name.last}`;
      return (
        userFullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.login.username.toLowerCase().includes(search.toLowerCase())
      );
    },
    [search]
  );

  useEffect(() => {
    requestRandomUsers()
      .then(({ data }: AxiosResponse<RandomUserResponse>) => {
        setAllUsers(data.results);
        setUsersToRender(data.results);
      })
      .catch(({ response }: AxiosError<ApiError>) => {
        setError(true);
        setErrorData({
          statusText: response?.statusText,
          errorMessage: response?.data.error,
        });
      });
  }, []);

  useEffect(() => {
    setUsersToRender(allUsers.filter((user) => filterUsers(user)));
  }, [allUsers, filterUsers]);

  useEffect(() => {
    if (search === '') setUsersToRender(allUsers);
  }, [allUsers, search]);

  return (
    <>
      <div className="sm:flex sm:items-center md:block lg:flex">
        <Title title="Usuários aleatórios" />
        <div className="mt-4 max-w-sm sm:mt-0 sm:ml-16 sm:flex-none md:ml-0 md:mt-4 lg:mt-0">
          <Searchbar search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 xl:table-cell"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell md:hidden lg:table-cell"
                    >
                      Usuário
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Idade
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {usersToRender
                    .slice(
                      (currentPage - 1) * RESULTS_PER_PAGE,
                      currentPage * MAX_RESULTS_PER_PAGE
                    )
                    .map((user) => (
                      <tr key={user.email}>
                        <RandomUser user={user} />
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      {error && (
        <Notification
          error={{
            title: errorData?.statusText,
            description: errorData?.errorMessage,
          }}
          icon={{ icon: ExclamationCircleIcon, color: 'text-red-500' }}
          show={error}
          setShow={setError}
        />
      )}
    </>
  );
}
