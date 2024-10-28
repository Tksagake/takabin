import * as React from 'react';
import { useState, useEffect } from 'react';
import { wasteCategories } from '../data/wasteCategories';
import WasteCategoryCard from '../components/WasteCategoryCard';
import WasteSortingModal from '../components/WasteSortingModal';
import { WasteCategory, WasteSortingResult } from '../types';
import { useStore } from '../store';
import { Award } from 'lucide-react';

export default function WasteSorting() {
  const [selectedCategory, setSelectedCategory] = useState<WasteCategory | null>(null);
  const { user } = useStore();

  useEffect(() => {
    // Debugging logs to verify data
    console.log('Waste Categories:', wasteCategories);
    console.log('User:', user);
  }, [user]);

  const handleSortingComplete = (result: WasteSortingResult) => {
    console.log('Sorting result:', result);
    // Handle sorting logic here, like updating the user points
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Waste Sorting Guide</h1>
        <p className="text-gray-600">
          Select a category to learn more about proper waste sorting and earn points for recycling.
        </p>
        {user ? (
          <div className="mt-4 flex items-center space-x-2">
            <Award className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">Your points: {user.points}</span>
          </div>
        ) : (
          <p className="text-red-600">User information not available.</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wasteCategories.length > 0 ? (
          wasteCategories.map((category) => (
            <WasteCategoryCard
              key={category.id}
              category={category}
              onSelect={setSelectedCategory}
            />
          ))
        ) : (
          <p className="text-gray-600">No waste categories available.</p>
        )}
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
