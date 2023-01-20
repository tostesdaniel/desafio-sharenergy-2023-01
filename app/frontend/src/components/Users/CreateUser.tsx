import { UserPlusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import UserModal from './UserModal';

export default function CreateUser() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => setModalOpen(true)}
      >
        <div className="mx-auto h-fit w-fit">
          <UserPlusIcon
            className="h-12 w-12 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <span className="mt-2 block text-sm font-medium text-gray-900">
          Inserir novo usuário
        </span>
      </button>
      {modalOpen && <UserModal open={modalOpen} setOpen={setModalOpen} />}
    </>
  );
}
