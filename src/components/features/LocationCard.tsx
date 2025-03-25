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
    <div className='relative w-full h-[280px] rounded-3xl overflow-hidden group cursor-pointer'>
      <Image
        src={imageUrl}
        alt={title}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>

      {/* Titre principal */}
      <div className='absolute top-6 left-6 right-6 z-10'>
        <span className='text-white/80 text-sm font-medium mb-2 inline-block'>
          Featured Collection
        </span>
        <h3 className='text-white text-xl font-semibold leading-tight'>
          {mainTitle}
        </h3>
      </div>

      {/* Badge avec localisation */}
      <div className='absolute bottom-6 left-6 z-10'>
        <div className='flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 group-hover:bg-white transition-colors'>
          <MapPin className='h-4 w-4 text-gray-700' strokeWidth={2.5} />
          <span className='text-sm font-medium text-gray-900'>{title}</span>
        </div>
      </div>

      {/* Nombre de propriétés */}
      <div className='absolute bottom-6 right-6 z-10'>
        <span className='text-white/90 text-sm font-medium'>12 Properties</span>
      </div>
    </div>
  );
};

export default LocationCard;
