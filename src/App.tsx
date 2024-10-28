import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WasteSorting from './pages/WasteSorting';
import CollectionRequests from './pages/CollectionRequests';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/waste-sorting" element={<WasteSorting />} />
          <Route path="/collection-requests" element={<CollectionRequests />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;