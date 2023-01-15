import { RandomUser as IRandomUser } from '../services/interfaces/randomUser.interface';

interface Props {
  user: IRandomUser;
}

export default function RandomUser({ user }: Props) {
  const { name, picture, email, dob, login } = user;

  return (
    <>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={picture.thumbnail}
              alt="Avatar do usuário"
            />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">
              {`${name.first} ${name.last}`}
            </div>
            <div className="text-gray-500 lg:hidden">{email}</div>
            <div className="text-gray-500 sm:hidden md:table-cell xl:hidden">
              {login.username}
            </div>
          </div>
        </div>
      </td>
      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
        {email}
      </td>
      <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell md:hidden xl:table-cell">
        {login.username}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {dob.age}
      </td>
    </>
  );
}
