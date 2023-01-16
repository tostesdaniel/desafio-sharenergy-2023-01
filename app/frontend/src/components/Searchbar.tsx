import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function Searchbar({ search, setSearch }: Props) {
  return (
    <div>
      <label
        htmlFor="search"
        className="ml-px block pl-4 text-sm font-medium text-gray-700"
      >
        Buscar usuários
      </label>
      <div className="relative mt-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full rounded-full border-gray-300 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
}
