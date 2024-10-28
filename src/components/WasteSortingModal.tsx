import React, { useState } from 'react';
import { WasteCategory, WasteSortingResult } from '../types';
import { X } from 'lucide-react';

interface Props {
  category: WasteCategory;
  onClose: () => void;
  onSubmit: (result: WasteSortingResult) => void;
}

export default function WasteSortingModal({ category, onClose, onSubmit }: Props) {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      categoryId: category.id,
      quantity,
      points: category.points * quantity,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Sort {category.name}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4">
          <h4 className="font-medium mb-2">Examples:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {category.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {category.recyclable && (
            <p className="text-sm text-gray-600 mb-4">
              You will earn {category.points * quantity} points for recycling {quantity} {quantity === 1 ? 'item' : 'items'}
            </p>
          )}

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}