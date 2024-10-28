import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import { useStore } from '../store';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'thrower' | 'collector' | 'admin'>('thrower');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call for user authentication or registration
    const user = {
      id: '1', // In a real scenario, fetch this from your backend
      name: name || 'John Doe', // Default name if not provided
      role,
      points: 100, // Example points, customize based on your logic
    };

    // Set user in global state
    setUser(user);

    // Optionally, store user info in local storage for persistence
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to the dashboard
    navigate('/dashboard');
  };

  useEffect(() => {
    // Optionally check if a user is already logged in on mount
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      navigate('/dashboard');
    }
  }, [setUser, navigate]);

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
          {/* Name Input for Signup */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          )}

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Role Selection for Signup */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="thrower">Waste Thrower</option>
                <option value="collector">Waste Collector</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            {isLogin ? (
              <>
                <LogIn className="h-4 w-4" />
                <span>Sign in</span>
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4" />
                <span>Sign up</span>
              </>
            )}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-600 hover:text-emerald-500"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
