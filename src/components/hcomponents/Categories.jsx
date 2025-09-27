import React from 'react';

const Categories = () => {
  const categories = ['Electric', 'SUV', 'Sedan', 'Pickup Truck', 'Luxury', 'Crossover', 'Hybrid', 'Diesel', 'Coupe', 'Hatchback'];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-white mb-4">Popular categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button key={category} className="bg-gray-700 text-white py-2 px-4 rounded-full text-sm hover:bg-gray-600">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;