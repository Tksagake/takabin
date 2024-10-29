import * as React from 'react';
import { useState, useEffect } from 'react';
import { wasteCategories } from '../data/wasteCategories';
import WasteCategoryCard from '../components/WasteCategoryCard';
import WasteSortingModal from '../components/WasteSortingModal';
import { WasteCategory, WasteSortingResult } from '../types';
import { useStore } from '../store';
import { Award } from 'lucide-react';

// Assuming the screenshot is saved in the assets folder
import appScreenshot from '../assets/takabin-screenshot.png';

export default function WasteSorting() {
  const [selectedCategory, setSelectedCategory] = useState<WasteCategory | null>(null);
  const { user } = useStore();

  useEffect(() => {
    console.log('Waste Categories:', wasteCategories);
    console.log('User:', user);
  }, [user]);

  const handleSortingComplete = (result: WasteSortingResult) => {
    console.log('Sorting result:', result);
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

      {/* Download Section */}
      <div className="bg-gray-50 py-10 rounded-lg shadow-lg mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get Takabin on the Go!</h2>
        <img src= "src/App.png" alt="Takabin App Screenshot" className="mx-auto mb-4 w-64 rounded-md shadow-md" />
        <p className="text-gray-700 mb-6">
          Download the Takabin app for Android or iOS to access waste sorting tips anywhere, anytime.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://play.google.com/store" // Replace with actual link
            className="transition-transform transform hover:scale-105"
          >
            <img
              src="https://static-cse.canva.com/_next/static/assets/google-play-badge_w320xh95_71297a0474b43135da8471a7e48d7d6f010da5ad12fa98f9537d5d07cf9fdade.png"
              alt="Download on Google Play"
              className="w-40"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/" // Replace with actual link
            className="transition-transform transform hover:scale-105"
          >
            <img
              src="https://static-cse.canva.com/_next/static/assets/app-store-badge_w320xh106_b6294c3f8e62282daa505a78b10ddfba1fdf0e8218dbccd131ddac24cf564bd2.png"
              alt="Download on the App Store"
              className="w-40"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
