import React from 'react';
import CarCard from './CarCard'; // Import the CarCard component

const EvShowcase = () => {
  const evCars = [
    { name: 'Tesla Model S', imageUrl: 'https://placehold.co/600x400/334155/FFF?text=Model+S' },
    { name: 'Tesla Model 3', imageUrl: 'https://placehold.co/600x400/334155/FFF?text=Model+3' },
    { name: 'Nissan Leaf', imageUrl: 'https://placehold.co/600x400/334155/FFF?text=Leaf' },
    { name: 'Tesla Model Y', imageUrl: 'https://placehold.co/600x400/334155/FFF?text=Model+Y' },
    { name: 'Ford Mustang Mach-E', imageUrl: 'https://placehold.co/600x400/334155/FFF?text=Mach-E' },
    { name: 'Ford F-150 Lightning', imageUrl: 'https://placehold.co/600x400/334155/FFF?text=Lightning' },
    { name: 'BMW i3', imageUrl: 'https://placehold.co/600x400/334155/FFF?text=BMW+i3' },
    { name: 'Volkswagen ID.4', imageUrl: 'https://placehold.co/600x400/334155/FFF?text=ID.4' },
  ];

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold text-white">All new EVs</h2>
      <p className="text-gray-400 mb-6">Experience the best way to search new cars.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {evCars.map((car) => (
          <CarCard key={car.name} name={car.name} imageUrl={car.imageUrl} />
        ))}
      </div>

      <div className="mt-8 flex space-x-4">
        <button className="bg-gray-700 text-white py-2 px-5 rounded-full hover:bg-gray-600">See more electric cars</button>
        <button className="bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-gray-200">Shop all cars</button>
      </div>
    </div>
  );
};

export default EvShowcase;