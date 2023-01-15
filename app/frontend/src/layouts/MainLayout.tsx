import {
  ArrowPathIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileSidebar from '../components/MobileSidebar';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export const navigation = [
  { name: 'Usuários aleatórios', href: 'users/random', icon: ArrowPathIcon },
  { name: 'Gatos HTTP', href: 'http-cat', icon: QuestionMarkCircleIcon },
];

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar />
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Outlet />
    </div>
  );
}
