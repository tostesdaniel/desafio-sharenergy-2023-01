import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Searchbar from '../components/Searchbar';
import Table from '../components/Table';
import Title from '../components/Title';
import CreateUser from '../components/Users/CreateUser';
import TableBody from '../components/Users/TableBody';
import TableHead from '../components/Users/TableHead';
import { IUser } from '../services/interfaces/user.interface';
import { requestUsers } from '../services/requests';

export default function Users() {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [usersToRender, setUsersToRender] = useState<IUser[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    requestUsers()
      .then(({ data }: AxiosResponse<IUser[]>) => {
        setAllUsers(data);
        setUsersToRender(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="sm:flex sm:items-center md:block lg:flex">
        <Title title="Usuários" />
        <div className="mt-4 max-w-sm sm:mt-0 sm:ml-16 sm:flex-none md:ml-0 md:mt-4 lg:mt-0">
          <Searchbar search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="mt-4">
        <CreateUser />
        <Table currentPage={currentPage} setCurrentPage={setCurrentPage}>
          <TableHead />
          <TableBody currentPage={currentPage} usersToRender={usersToRender} />
        </Table>
      </div>
    </>
  );
}
