import React from 'react';

const SearchForm = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex border-b border-gray-700 mb-4">
        <button className="text-white py-2 px-4 border-b-2 border-white font-semibold">Shop cars for sale</button>
        <button className="text-gray-400 py-2 px-4">Sell your car</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <select className="bg-gray-700 text-white p-3 rounded-md border border-gray-600">
          <option>New</option>
          <option>Used</option>
        </select>
        <select className="bg-gray-700 text-white p-3 rounded-md border border-gray-600">
          <option></option>
        </select>
        <select className="bg-gray-700 text-white p-3 rounded-md border border-gray-600">
          <option></option>
        </select>
        <div className="flex gap-2">
            <input type="text" placeholder="Miles" className="bg-gray-700 text-white p-3 rounded-md w-1/2 border border-gray-600" />
            <input type="text" placeholder="ZIP" className="bg-gray-700 text-white p-3 rounded-md w-1/2 border border-gray-600" />
        </div>
        <button className="bg-purple-600 text-white font-bold p-3 rounded-md hover:bg-purple-700 col-span-1 md:col-start-5">
          Show Results
        </button>
      </div>
    </div>
  );
};

export default SearchForm;