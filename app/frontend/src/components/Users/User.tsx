import { cpf as cpfLib } from 'cpf-cnpj-validator';
import { parsePhoneNumber } from 'libphonenumber-js';
import { useState } from 'react';
import { IEditUser } from '../../services/interfaces/user.interface';
import CreateUserModal, { Mode } from './UserModal';

interface Props {
  user: IEditUser;
}

export default function User({ user }: Props) {
  const { _id, address, cpf, email, phone, username } = user;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<Mode>('edit');

  return (
    <>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="font-medium text-gray-900">{username}</div>
            <div className="text-gray-500 min-[560px]:hidden">{email}</div>
            <div className="hidden text-gray-500">{phone}</div>
          </div>
        </div>
      </td>
      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 min-[560px]:table-cell">
        {email}
      </td>
      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
        {address}
      </td>
      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 xl:table-cell">
        {cpfLib.format(cpf)}
      </td>
      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 xl:table-cell">
        {parsePhoneNumber(phone, 'BR').formatNational()}
      </td>
      <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <button
          id={_id}
          type="button"
          className="text-indigo-600 hover:text-indigo-900"
          onClick={() => {
            setModalMode('view');
            setModalOpen(true);
          }}
        >
          Ver<span className="sr-only">, {username}</span>
        </button>
      </td>
      <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <button
          id={_id}
          type="button"
          className="text-indigo-600 hover:text-indigo-900"
          onClick={() => {
            setModalMode('edit');
            setModalOpen(true);
          }}
        >
          Editar<span className="sr-only">, {username}</span>
        </button>
      </td>
      {modalOpen && (
        <td>
          <CreateUserModal
            mode={modalMode}
            open={modalOpen}
            setOpen={setModalOpen}
            user={user}
          />
        </td>
      )}
    </>
  );
}
