import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

export default function Logout() {
  const navigate = useNavigate();
  const clearUser = useStore((state) => state.clearUser);

  const handleLogout = () => {
    // Clear user data from global state and local storage
    clearUser();
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to the login page or home page
  };

  return (
    <button
      onClick={handleLogout}
      className="text-emerald-600 hover:text-emerald-500"
    >
      Logout
    </button>
  );
}
