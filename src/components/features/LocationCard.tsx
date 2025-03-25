'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  imageUrl: string;
  title: string;
  mainTitle: string;
}

const LocationCard = ({ imageUrl, title, mainTitle }: LocationCardProps) => {
  return (
    <div className='relative w-full h-[280px] rounded-3xl overflow-hidden group'>
      <Image
        src={imageUrl}
        alt={title}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/30'></div>

      {/* Titre principal */}
      <div className='absolute top-6 left-6 z-10'>
        <h3 className='text-white text-xl font-medium'>{mainTitle}</h3>
      </div>

      {/* Badge avec localisation */}
      <div className='absolute bottom-6 left-6 z-10 flex items-center space-x-2 bg-white rounded-full px-4 py-2'>
        <MapPin className='h-4 w-4' strokeWidth={2.5} />
        <span className='text-sm font-medium'>{title}</span>
      </div>
    </div>
  );
};

export default LocationCard;
