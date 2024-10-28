import React from 'react';
import { Award, Package, Recycle, TrendingUp } from 'lucide-react';
import DashboardCard from './DashboardCard';

export default function ThrowerDashboard() {
  const stats = [
    {
      title: 'Total Points',
      value: '520',
      change: '+45',
      trend: 'up',
      icon: Award,
    },
    {
      title: 'Items Recycled',
      value: '32',
      change: '+8',
      trend: 'up',
      icon: Recycle,
    },
    {
      title: 'Collections',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: Package,
    },
    {
      title: 'Impact Score',
      value: '85',
      change: '+5',
      trend: 'up',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
        <p className="text-gray-600">Track your recycling progress and impact.</p>
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
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                action: 'Recycled 5 plastic items',
                points: '+50 points',
                time: '2 hours ago',
                icon: Recycle,
              },
              {
                action: 'Collection completed',
                points: '+20 points',
                time: '1 day ago',
                icon: Package,
              },
              {
                action: 'Reached recycling milestone',
                points: '+100 points',
                time: '3 days ago',
                icon: Award,
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <activity.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
                <span className="text-emerald-600 font-medium">{activity.points}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Rewards Available</h2>
          <div className="space-y-4">
            {[
              {
                reward: 'Eco-friendly Shopping Bag',
                points: '200 points',
                progress: 80,
              },
              {
                reward: '$10 Green Store Voucher',
                points: '500 points',
                progress: 45,
              },
              {
                reward: 'Premium Recycling Kit',
                points: '1000 points',
                progress: 25,
              },
            ].map((reward, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{reward.reward}</span>
                  <span className="text-sm text-gray-500">{reward.points}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-emerald-600 h-2 rounded-full"
                    style={{ width: `${reward.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}