import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ sidebarOpen, setSidebarOpen }: Props) {
  return (
    <div className="md:pl-64">
      <div className="sticky top-0 z-10 h-16 bg-white shadow">
        <button
          type="button"
          className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Abrir menu</span>
          <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
