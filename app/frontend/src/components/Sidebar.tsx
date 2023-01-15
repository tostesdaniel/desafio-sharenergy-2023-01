import { NavLink } from 'react-router-dom';
import { navigation } from '../layouts/MainLayout';
import Logo from '../logo.png';

export default function Sidebar() {
  return (
    <div className="hidden md:flex">
      <div>
        <div>
          <img className="h-8 w-auto" src={Logo} alt="Logo" />
        </div>

        <div>
          <nav>
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href}>
                <item.icon className="h-6 w-6" aria-hidden="true" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
