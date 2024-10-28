import React from 'react';
import { MapPin, Package, Clock, CheckCircle } from 'lucide-react';
import DashboardCard from './DashboardCard';

export default function CollectorDashboard() {
  const pendingCollections = [
    {
      id: '1',
      location: '123 Green Street',
      time: '10:00 AM',
      types: ['Plastic', 'Paper'],
      status: 'pending',
    },
    {
      id: '2',
      location: '456 Eco Avenue',
      time: '2:00 PM',
      types: ['Glass', 'Metal'],
      status: 'accepted',
    },
  ];

  const stats = [
    {
      title: 'Today\'s Collections',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: Package,
    },
    {
      title: 'Pending Requests',
      value: '3',
      change: '-1',
      trend: 'down',
      icon: Clock,
    },
    {
      title: 'Completed Today',
      value: '5',
      change: '+5',
      trend: 'up',
      icon: CheckCircle,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Collector Dashboard</h1>
        <p className="text-gray-600">Manage your waste collection schedule and routes.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

      <div className="bg-white rounded-xl shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Collection Schedule</h2>
        </div>
        <div className="divide-y">
          {pendingCollections.map((collection) => (
            <div key={collection.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="font-medium">{collection.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>{collection.time}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {collection.types.map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    collection.status === 'pending'
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {collection.status === 'pending' ? 'Accept' : 'Accepted'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}