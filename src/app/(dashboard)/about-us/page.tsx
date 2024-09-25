import React from 'react';
import Image from 'next/image';

const DesignCard = () => {
  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden"
      style={{ width: '350px', height: '333px' }} >
      <div className="bg-white shadow-md rounded-lg ">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-48">
              {/* Another Image */}
              <Image src="/pic_ED813001.svg" alt="Design wireframe" layout="fill" objectFit="contain" />
            </div>
          </div>
        
        <div className="bg-blue-50 p-4">
          <h3 className="text-lg font-semibold">LAYOUT FOR DESIGN</h3>
          <p className="text-gray-500 text-xs">ED813001</p>
          <div className="flex justify-end items-center mt-4 ">
            <p className="text-sm font-medium">1.2k</p>
            <Image src="/like_fill.svg" alt="like logo" width={20} height={20}/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DesignCard;
