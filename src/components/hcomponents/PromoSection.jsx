import React from 'react';

const PromoSection = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-8 my-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-white">
        <p className="text-sm text-gray-400">Lorem Ipsum</p>
        <h2 className="text-3xl font-bold my-2">Best Cars in Town!!</h2>
        <p className="text-gray-300 mb-6">We analyze five factors to determine which new car suits you the best</p>
        <div className="flex space-x-4">
          <button className="bg-gray-700 text-white py-2 px-5 rounded-full hover:bg-gray-600">Rent for Now</button>
          <button className="bg-white text-black font-semibold py-2 px-5 rounded-full hover:bg-gray-200">Shop the best cars</button>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      
        <img src="https://placehold.co/400x300/1F2937/FFFFFF?text=Promo+Image" alt="American Cars Promo" className="rounded-lg" />
      </div>
    </div>
  );
};

export default PromoSection;