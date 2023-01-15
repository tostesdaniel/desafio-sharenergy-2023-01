import { NavLink } from 'react-router-dom';
import { navigation } from '../layouts/MainLayout';
import Logo from '../logo.png';
import classNames from '../services/helpers/joinClassnames';

export default function Sidebar() {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div>
        <div>
          <img className="h-8 w-auto" src={Logo} alt="Logo" />
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto">
          <nav className="flex-1 space-y-1 py-4 px-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center rounded-md p-2 text-sm font-medium'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={classNames(
                        isActive
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
