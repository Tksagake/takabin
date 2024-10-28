import React, { useState } from 'react';
import { wasteCategories } from '../data/wasteCategories';
import WasteCategoryCard from '../components/WasteCategoryCard';
import WasteSortingModal from '../components/WasteSortingModal';
import { WasteCategory, WasteSortingResult } from '../types';
import { useStore } from '../store';
import { Award } from 'lucide-react';

export default function WasteSorting() {
  const [selectedCategory, setSelectedCategory] = useState<WasteCategory | null>(null);
  const { user } = useStore();

  const handleSortingComplete = (result: WasteSortingResult) => {
    // In a real app, this would make an API call to update the user's points
    console.log('Sorting result:', result);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Waste Sorting Guide</h1>
        <p className="text-gray-600">
          Select a category to learn more about proper waste sorting and earn points for recycling.
        </p>
        {user && (
          <div className="mt-4 flex items-center space-x-2">
            <Award className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">Your points: {user.points}</span>
          </div>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wasteCategories.map((category) => (
          <WasteCategoryCard
            key={category.id}
            category={category}
            onSelect={setSelectedCategory}
          />
        ))}
      </div>

      {selectedCategory && (
        <WasteSortingModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
          onSubmit={handleSortingComplete}
        />
      )}
    </div>
  );
}