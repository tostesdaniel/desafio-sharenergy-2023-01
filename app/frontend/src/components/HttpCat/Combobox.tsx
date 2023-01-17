import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useContext, useState } from 'react';
import { CatContext } from '../../context/CatContext';
import { httpStatusCodes, StatusCode } from '../../services/constants';
import classNames from '../../services/helpers/joinClassnames.js';

export default function StatusCodeCombobox() {
  const [query, setQuery] = useState('');
  const { selectedStatusCode, setSelectedStatusCode } = useContext(CatContext);

  const filteredStatusCodes =
    query === ''
      ? httpStatusCodes
      : httpStatusCodes.filter((statusCode) => {
          return statusCode.status.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={selectedStatusCode}
      onChange={setSelectedStatusCode}
    >
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Status HTTP
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(e) => setQuery(e.target.value)}
          displayValue={(statusCode: StatusCode) =>
            `${statusCode.status} - ${statusCode.message}`
          }
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredStatusCodes.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredStatusCodes.map((statusCode) => (
              <Combobox.Option
                key={statusCode.status}
                value={statusCode}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex">
                      <span
                        className={classNames(
                          'truncate',
                          selected && 'font-semibold'
                        )}
                      >
                        {statusCode.status}
                      </span>
                      <span
                        className={classNames(
                          'ml-2 truncate text-gray-500',
                          active ? 'text-indigo-200' : 'text-gray-500'
                        )}
                      >
                        {statusCode.message}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}