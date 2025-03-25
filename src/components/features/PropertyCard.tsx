'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  price: number;
}

const PropertyCard = ({
  imageUrl,
  title,
  location,
  price
}: PropertyCardProps) => {
  return (
    <div className='w-full max-w-[540px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
      <div className='relative h-[240px]'>
        <Image src={imageUrl} alt={title} fill className='object-cover' />
        <div className='absolute bottom-4 left-4 flex items-center bg-black bg-opacity-40 text-white px-3 py-1 rounded-full'>
          <MapPin className='h-4 w-4 mr-1' />
          <span className='text-sm'>{location}</span>
        </div>
      </div>
      <div className='p-4 bg-white'>
        <h3 className='text-xl font-semibold mb-1'>{title}</h3>
        <div className='flex justify-between items-center'>
          <span className='text-gray-600'>${price} / night</span>
          <button className='text-black border border-black rounded-full px-3 py-1 text-sm hover:bg-black hover:text-white transition-colors'>
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
