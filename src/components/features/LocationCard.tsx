'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  imageUrl: string;
  title: string;
}

const LocationCard = ({ imageUrl, title }: LocationCardProps) => {
  return (
    <div className='relative w-full aspect-square rounded-3xl overflow-hidden group'>
      <Image
        src={imageUrl}
        alt={title}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/20'></div>
      <div className='absolute bottom-5 left-0 right-0 flex justify-center'>
        <div className='flex items-center bg-white rounded-full px-4 py-2 shadow-md'>
          <MapPin className='h-5 w-5 mr-2' />
          <span className='text-sm font-medium'>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
