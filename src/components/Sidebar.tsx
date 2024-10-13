import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, UserPlus, BarChart, LogOut } from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <div className="bg-blue-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold text-center mb-6">Employee Admin</h2>
      <nav>
        <Link to="/" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/')}`}>
          <Home className="inline-block mr-2 w-5 h-5" />
          Dashboard
        </Link>
        <Link to="/employees" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/employees')}`}>
          <Users className="inline-block mr-2 w-5 h-5" />
          Employee List
        </Link>
        <Link to="/employees/new" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/employees/new')}`}>
          <UserPlus className="inline-block mr-2 w-5 h-5" />
          Add Employee
        </Link>
        <Link to="/statistics" className={`block py-2.5 px-4 rounded transition duration-200 ${isActive('/statistics')}`}>
          <BarChart className="inline-block mr-2 w-5 h-5" />
          Statistics
        </Link>
        <button onClick={onLogout} className="block w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">
          <LogOut className="inline-block mr-2 w-5 h-5" />
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;