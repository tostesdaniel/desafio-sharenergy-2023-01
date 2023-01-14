import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import RandomUser from '../components/RandomUser';
import {
  RandomUser as IRandomUser,
  RandomUserResponse,
} from '../services/interfaces/randomUser.interface';
import { requestRandomUsers } from '../services/requests';

export default function RandomUsers() {
  const [users, setUsers] = useState<IRandomUser[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    requestRandomUsers().then(({ data }: AxiosResponse<RandomUserResponse>) =>
      setUsers(data.results)
    );
  }, []);

  return (
    <>
      <main className="flex-1">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Usuários</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
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
                            className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
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
                        {users.map((user) => (
                          <tr key={user.email}>
                            <RandomUser user={user} />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
