'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FeatureCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const FeatureCard = ({
  imageUrl,
  title,
  description,
  link
}: FeatureCardProps) => {
  return (
    <Link href={link} className='block w-full'>
      <div className='relative w-full h-[320px] rounded-lg overflow-hidden group'>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className='object-cover transition-transform group-hover:scale-105 duration-300'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6'>
          <h3 className='text-2xl font-semibold text-white mb-2'>{title}</h3>
          <p className='text-white/90 mb-4'>{description}</p>
          <span className='inline-block text-white border-b border-white pb-1'>
            Discover more
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
