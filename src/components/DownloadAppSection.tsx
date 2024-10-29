import * as React from 'react';

const DownloadAppSection: React.FC = () => {
  return (
    <div className="bg-blue-50 p-6 mt-8 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold text-gray-800">Download the Takabin App!</h2>
      <p className="text-gray-600 mt-2">
        Take waste sorting on the go! Download the Takabin app for quick access to waste sorting guides and more.
      </p>
      <a
        href="https://example.com/download" // Replace with your app download link
        className="mt-4 inline-block bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors"
      >
        Download Now
      </a>
    </div>
  );
};

export default DownloadAppSection;
