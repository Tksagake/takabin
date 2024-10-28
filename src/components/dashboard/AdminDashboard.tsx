import React from 'react';
import { BarChart3, Users, Truck, Recycle, ArrowUp, ArrowDown } from 'lucide-react';
import DashboardCard from './DashboardCard';
import DashboardChart from './DashboardChart';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Active Collectors',
      value: '45',
      change: '+5%',
      trend: 'up',
      icon: Truck,
    },
    {
      title: 'Waste Collected',
      value: '25.4t',
      change: '+18%',
      trend: 'up',
      icon: Recycle,
    },
    {
      title: 'Recycling Rate',
      value: '76%',
      change: '-2%',
      trend: 'down',
      icon: BarChart3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Monitor and manage waste collection operations.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Collection Trends</h2>
          <DashboardChart />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                action: 'New collector registered',
                time: '2 minutes ago',
                icon: Users,
              },
              {
                action: 'Collection completed',
                time: '15 minutes ago',
                icon: Truck,
              },
              {
                action: 'Recycling milestone reached',
                time: '1 hour ago',
                icon: Recycle,
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <activity.icon className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}