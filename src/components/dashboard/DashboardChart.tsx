import React from 'react';

export default function DashboardChart() {
  return (
    <div className="h-64 flex items-end space-x-2">
      {[65, 45, 75, 55, 85, 70, 60].map((height, index) => (
        <div key={index} className="flex-1 flex flex-col items-center">
          <div
            className="w-full bg-emerald-200 rounded-t"
            style={{ height: `${height}%` }}
          />
          <span className="text-sm text-gray-500 mt-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
          </span>
        </div>
      ))}
    </div>
  );
}