import { Outlet } from 'react-router-dom';
import Container from './Container';

export default function Content() {
  return (
    <main className="flex-1">
      <div className="py-6">
        <Container>
          <Outlet />
        </Container>
      </div>
    </main>
  );
}
