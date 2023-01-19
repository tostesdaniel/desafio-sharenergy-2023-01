import { RandomUser as IRandomUser } from '../../services/interfaces/randomUser.interface';
import RandomUser from '../RandomUser';

interface Props {
  currentPage: number;
  usersToRender: IRandomUser[];
}

const MAX_RESULTS_PER_PAGE = 10;
const RESULTS_PER_PAGE = 10;

export default function TableBody({ currentPage, usersToRender }: Props) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {usersToRender
        .slice(
          (currentPage - 1) * RESULTS_PER_PAGE,
          currentPage * MAX_RESULTS_PER_PAGE
        )
        .map((user) => (
          <tr key={user.email}>
            <RandomUser user={user} />
          </tr>
        ))}
    </tbody>
  );
}
