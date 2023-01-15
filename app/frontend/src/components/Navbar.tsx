import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ sidebarOpen, setSidebarOpen }: Props) {
  return (
    <div>
      <div className="sticky top-0 z-10 h-16 bg-white shadow">
        <button type="button" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Abrir menu</span>
          <Bars3BottomLeftIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
