// components/DesignCard.js
import React from 'react';
import Image from 'next/image';

const DesignCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto">
      <div className="p-4 flex justify-center items-center">
        {/* Image Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-24 h-48">
            {/* Use your imported image if needed or an Image from your assets */}
            <Image src="/design-placeholder.png" alt="Design layout" layout="fill" objectFit="contain" />
          </div>
          <div className="relative w-32 h-48">
            {/* Another Image */}
            <Image src="/design-placeholder.png" alt="Design wireframe" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-4">
        <h3 className="text-lg font-semibold">LAYOUT FOR DESIGN</h3>
        <p className="text-gray-500 text-xs">ED813001</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm font-medium">1.2k</p>
          <svg
            xmlns=""
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
