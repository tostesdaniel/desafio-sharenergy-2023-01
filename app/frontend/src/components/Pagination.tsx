import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';
import { Dispatch, SetStateAction } from 'react';
import classNames from '../services/helpers/joinClassnames';

interface Props {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({ currentPage, setCurrentPage }: Props) {
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div
        className={classNames(
          '-mt-px flex w-0 flex-1',
          currentPage === 1 && 'invisible'
        )}
      >
        <button
          type="button"
          onClick={() => setCurrentPage((prevState) => (prevState -= 1))}
          disabled={currentPage === 1}
          className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Anterior
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <p className="text-sm text-gray-700">
          Página <span className="font-medium">{currentPage}</span>
        </p>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          type="button"
          onClick={() => setCurrentPage((prevState) => (prevState += 1))}
          className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Próxima
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
