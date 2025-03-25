'use client';

import Link from 'next/link';
import { Triangle } from 'lucide-react';

const Header = () => {
  return (
    <header className='w-full py-5 flex justify-between items-center'>
      <div className='flex items-center'>
        {/* Logo */}
        <Link href='/' className='flex items-center mr-12'>
          <Triangle className='h-6 w-6 fill-black' />
        </Link>

        {/* Navigation */}
        <nav className='hidden md:flex items-center space-x-8'>
          <Link
            href='/cabins-cottages'
            className='text-black text-sm tracking-wider hover:text-gray-700 transition-colors'
          >
            CABINS & COTTAGES
          </Link>
          <Link
            href='/entire-homes'
            className='text-black text-sm tracking-wider hover:text-gray-700 transition-colors'
          >
            ENTIRE HOMES
          </Link>
          <Link
            href='/unique-stays'
            className='text-black text-sm tracking-wider hover:text-gray-700 transition-colors'
          >
            UNIQUE STAYS
          </Link>
        </nav>
      </div>

      {/* Sign In Button */}
      <button className='bg-black text-white text-sm tracking-wider px-5 py-2 rounded-full'>
        SIGN IN
      </button>
    </header>
  );
};

export default Header;
