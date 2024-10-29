import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import { useStore } from '../store';

// Mock user database for demonstration
const mockUsers: { id: string; name: string; role: 'thrower' | 'collector' | 'admin'; password: string }[] = [
  { id: '1', name: 'JohnDoe', role: 'thrower', password: 'password123' },
  { id: '2', name: 'JaneSmith', role: 'collector', password: 'securepass' },
  { id: '3', name: 'AdminUser', role: 'admin', password: 'adminpass' },
  { id: '3', name: 'MSikolia', role: 'admin', password: '12121212' },
  { id: '3', name: 'DevNinja', role: 'thrower', password: '12121212' },
  // Add more users as needed
];

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'thrower' | 'collector' | 'admin'>('thrower');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // Find user based on name, role, and password
      const user = mockUsers.find((u) => u.name === name && u.password === password && u.role === role);

      if (user) {
        setUser({ id: user.id, name: user.name, role: user.role, points: 0 });
        navigate('/dashboard');
      } else {
        alert('Invalid name, password, or role');
      }
    } else {
      // For signup
      const newUser = { id: 'new_id', name, role, password, points: 0 };
      setUser(newUser); // Simulate adding a new user to your database
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin ? 'Sign in to your account' : 'Join our waste management community'}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">UserName</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="thrower">Waste Thrower</option>
              <option value="collector">Waste Collector</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
  type="submit"
  className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
>
  {isLogin ? (
    <>
      <LogIn className="h-4 w-4" />
      <span>Sign In</span>
    </>
  ) : (
    <>
      <UserPlus className="h-4 w-4" />
      <span>Sign Up</span>
    </>
  )}
</button>


          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-600"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4">
  <button
    type="button"
    class="flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 w-full max-w-xs"
  >
    <span aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="24" width="24">
        <path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"></path>
        <path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"></path>
        <path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"></path>
        <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"></path>
      </svg>
    </span>
    <span>Continue with Google</span>
  </button>
  <button
    type="button"
    class="flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 w-full max-w-xs"
  >
    <span aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
        <path fill="#1877f2" d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3V9.5a4 4 0 0 1 4.5-4H18v3h-2c-.8 0-1.5.7-1.5 1.5V12h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z"></path>
      </svg>
    </span>
    <span>Continue with Facebook</span>
  </button>
</div>


        </form>
      </div>
    </div>
  );
}
