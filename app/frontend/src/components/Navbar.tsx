import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ sidebarOpen, setSidebarOpen }: Props) {
  return (
    <div className="sticky top-0 z-10 h-16 bg-gray-100 pl-1 pt-1 shadow sm:p-3 sm:pl-3 md:hidden">
      <button
        type="button"
        className="inline-flex h-12 w-12 items-center justify-center text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Abrir menu</span>
        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
