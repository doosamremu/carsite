import React from 'react';

const CookieBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-gray-300 p-4 flex flex-col md:flex-row justify-between items-center shadow-lg text-sm">
      <p className="mb-4 md:mb-0">
        This website uses cookies and similar technologies to enable our website functionalities. We also share information about your use of our site with our social media, advertising, and analytics partners. For more details, see "Cookie preferences".
      </p>
      <div className="flex space-x-2">
        <button className="bg-gray-700 py-2 px-4 rounded-full hover:bg-gray-600">Cookie preferences</button>
        <button className="bg-gray-700 py-2 px-4 rounded-full hover:bg-gray-600">Reject all</button>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">Accept all</button>
      </div>
    </div>
  );
};

export default CookieBanner;