'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';

interface StoryCircleProps {
  imageUrl: string;
  title?: string;
}

const StoryCircle = ({ imageUrl, title }: StoryCircleProps) => {
  return (
    <div className='flex flex-col items-center relative'>
      <div className='relative w-[65px] h-[65px] rounded-full overflow-hidden border-[1px] border-gray-200'>
        <Image
          src={imageUrl}
          alt={title || 'Story'}
          fill
          className='object-cover grayscale'
        />
      </div>
      {title && (
        <span className='text-xs text-gray-600 text-center mt-1'>{title}</span>
      )}
      {!title && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-9 h-9 rounded-full bg-black bg-opacity-70 flex items-center justify-center'>
            <Play className='h-4 w-4 text-white fill-white ml-0.5' />
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryCircle;
