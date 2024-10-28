import React, { useState } from 'react';
import { wasteCategories } from '../data/wasteCategories';
import { CollectionRequest } from '../types';
import { Calendar, MapPin } from 'lucide-react';

interface Props {
  onSubmit: (request: Omit<CollectionRequest, 'id' | 'status' | 'createdAt'>) => void;
}

export default function CollectionRequestForm({ onSubmit }: Props) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [scheduledDate, setScheduledDate] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      userId: '1', // In a real app, this would come from auth
      wasteTypes: selectedTypes,
      scheduledDate,
      location,
      notes,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Waste Types
        </label>
        <div className="grid grid-cols-2 gap-3">
          {wasteCategories.map((category) => (
            <label
              key={category.id}
              className="flex items-center space-x-2 p-3 border rounded-md cursor-pointer hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(category.id)}
                onChange={(e) => {
                  setSelectedTypes(
                    e.target.checked
                      ? [...selectedTypes, category.id]
                      : selectedTypes.filter((id) => id !== category.id)
                  );
                }}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Collection Date
        </label>
        <div className="relative">
          <input
            type="date"
            required
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
          />
          <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Collection Location
        </label>
        <div className="relative">
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your address"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
          />
          <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Any special instructions for collection?"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        Schedule Collection
      </button>
    </form>
  );
}