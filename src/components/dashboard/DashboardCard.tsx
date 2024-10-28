import React from 'react';
import { ArrowUp, ArrowDown, LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
}

export default function DashboardCard({ title, value, change, trend, icon: Icon }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-emerald-100 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-emerald-600" />
        </div>
        <div className={`flex items-center space-x-1 ${
          trend === 'up' ? 'text-emerald-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? (
            <ArrowUp className="h-4 w-4" />
          ) : (
            <ArrowDown className="h-4 w-4" />
          )}
          <span className="text-sm font-medium">{change}</span>
        </div>
      </div>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}