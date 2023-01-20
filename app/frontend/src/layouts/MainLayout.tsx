import {
  ArrowPathIcon,
  FaceSmileIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon
} from '@heroicons/react/20/solid';
import { useState } from 'react';
import MobileSidebar from '../components/MobileSidebar';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Content from './Content';

export const navigation = [
  { name: 'Usuários', href: 'users', icon: UserGroupIcon },
  { name: 'Usuários aleatórios', href: 'users/random', icon: ArrowPathIcon },
  { name: 'Gatos HTTP', href: 'http-cat', icon: QuestionMarkCircleIcon },
  { name: 'Gerador de cães', href: 'dogs ', icon: FaceSmileIcon },
];

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar />
      <div className="flex flex-1 flex-col md:pl-64">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Content />
      </div>
    </div>
  );
}
