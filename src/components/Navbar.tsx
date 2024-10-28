import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, LogIn, Menu } from 'lucide-react';
import { useStore } from '../store';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-800">EcoWaste</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/waste-sorting" className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md">
              Waste Sorting
            </Link>
            <Link to="/collection-requests" className="text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md">
              Collection
            </Link>
            {user ? (
              <Link to="/dashboard" className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                Dashboard
              </Link>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-emerald-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/waste-sorting"
              className="block text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md"
            >
              Waste Sorting
            </Link>
            <Link
              to="/collection-requests"
              className="block text-gray-600 hover:text-emerald-600 px-3 py-2 rounded-md"
            >
              Collection
            </Link>
            {user ? (
              <Link
                to="/dashboard"
                className="block bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}