import { Outlet } from 'react-router-dom';
import Container from './Container';

interface Props {
  title: string | undefined;
}

export default function Content({ title }: Props) {
  return (
    <main className="flex-1">
      <div className="py-6">
        <Container>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </Container>
        <Container>
          <Outlet />
        </Container>
      </div>
    </main>
  );
}
