import React from 'react';

const CarCard = ({ name, imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-white font-semibold">{name}</h3>
        <a href="#" className="text-blue-400 text-sm mt-2 inline-block hover:underline">Shop now</a>
      </div>
    </div>
  );
};

export default CarCard;