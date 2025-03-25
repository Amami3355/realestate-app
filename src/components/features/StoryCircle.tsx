'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

interface StoryCircleProps {
  imageUrl: string;
  title: string;
}

const StoryCircle = ({ imageUrl, title }: StoryCircleProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 mb-2'>
        <Image src={imageUrl} alt={title} fill className='object-cover' />
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-20'>
          <Play className='h-6 w-6 text-white' fill='white' />
        </div>
      </div>
      <span className='text-sm text-gray-600 text-center'>{title}</span>
    </div>
  );
};

export default StoryCircle;
