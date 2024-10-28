import React from 'react';
import { WasteCategory } from '../types';
import * as Icons from 'lucide-react';

interface Props {
  category: WasteCategory;
  onSelect: (category: WasteCategory) => void;
}

export default function WasteCategoryCard({ category, onSelect }: Props) {
  const Icon = Icons[category.icon as keyof typeof Icons];

  return (
    <button
      onClick={() => onSelect(category)}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full text-left"
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${category.recyclable ? 'bg-emerald-100' : 'bg-red-100'}`}>
          <Icon className={`h-6 w-6 ${category.recyclable ? 'text-emerald-600' : 'text-red-600'}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{category.description}</p>
          <div className="flex items-center space-x-2">
            {category.recyclable && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                {category.points} points
              </span>
            )}
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              category.recyclable ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
            }`}>
              {category.recyclable ? 'Recyclable' : 'Non-recyclable'}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}