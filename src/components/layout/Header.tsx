'use client';

import Link from 'next/link';
import { Triangle } from 'lucide-react';

const Header = () => {
  return (
    <header className='w-full py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-100'>
      <div className='flex items-center'>
        {/* Logo */}
        <Link href='/' className='flex items-center mr-8'>
          <Triangle className='h-6 w-6' />
        </Link>

        {/* Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          <Link
            href='/cabins-cottages'
            className='text-black hover:text-gray-700 transition-colors'
          >
            CABINS & COTTAGES
          </Link>
          <Link
            href='/entire-homes'
            className='text-black hover:text-gray-700 transition-colors'
          >
            ENTIRE HOMES
          </Link>
          <Link
            href='/mirror-house'
            className='text-black hover:text-gray-700 transition-colors'
          >
            MIRROR HOUSE
          </Link>
        </nav>
      </div>

      {/* Sign In Button */}
      <button className='bg-black text-white px-4 py-2 rounded-full text-sm'>
        Sign in
      </button>
    </header>
  );
};

export default Header;
