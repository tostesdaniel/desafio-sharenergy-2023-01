export default function TableHead() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
        >
          Nome
        </th>
        <th
          scope="col"
          className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 xl:table-cell"
        >
          Email
        </th>
        <th
          scope="col"
          className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell md:hidden lg:table-cell"
        >
          Usuário
        </th>
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Idade
        </th>
      </tr>
    </thead>
  );
}
