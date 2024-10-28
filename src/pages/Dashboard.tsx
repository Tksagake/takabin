import React from 'react';
import { useStore } from '../store';
import AdminDashboard from '../components/dashboard/AdminDashboard';
import CollectorDashboard from '../components/dashboard/CollectorDashboard';
import ThrowerDashboard from '../components/dashboard/ThrowerDashboard';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useStore();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const DashboardComponent = {
    admin: AdminDashboard,
    collector: CollectorDashboard,
    thrower: ThrowerDashboard,
  }[user.role];

  return <DashboardComponent />;
}