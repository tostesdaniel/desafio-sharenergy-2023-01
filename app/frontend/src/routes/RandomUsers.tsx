import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Notification from '../components/Notification';
import TableBody from '../components/RandomUsers/TableBody';
import TableHead from '../components/RandomUsers/TableHead';
import Searchbar from '../components/Searchbar';
import Table from '../components/Table';
import Title from '../components/Title';
import {
  ApiError,
  RandomUser as IRandomUser,
  RandomUserResponse
} from '../services/interfaces/randomUser.interface';
import { requestRandomUsers } from '../services/requests';

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
      <Table currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <TableHead />
        <TableBody currentPage={currentPage} usersToRender={usersToRender} />
      </Table>
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
