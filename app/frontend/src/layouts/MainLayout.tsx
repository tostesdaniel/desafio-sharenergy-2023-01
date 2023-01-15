import {
  ArrowPathIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import MobileSidebar from '../components/MobileSidebar';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Content from './Content';

export const navigation = [
  { name: 'Usuários aleatórios', href: 'users/random', icon: ArrowPathIcon },
  { name: 'Gatos HTTP', href: 'http-cat', icon: QuestionMarkCircleIcon },
];

function getTitle(location: Location): string | undefined {
  return navigation.find((item) => item.href === location.pathname)?.name;
}

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar />
      <div className="flex flex-1 flex-col md:pl-64">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Content title={getTitle(location)} />
      </div>
    </div>
  );
}
