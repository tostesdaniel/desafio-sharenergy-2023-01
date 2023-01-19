import { Dispatch, SetStateAction } from 'react';
import Pagination from './Pagination';

interface Props {
  children: React.ReactElement[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Table({
  children,
  currentPage,
  setCurrentPage,
}: Props) {
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              {children}
            </table>
          </div>
        </div>
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
