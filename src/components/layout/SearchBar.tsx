'use client';

import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className='w-full max-w-[420px] h-[56px] relative rounded-full overflow-hidden border border-gray-200 shadow-sm'>
      <input
        type='text'
        placeholder='Find Inspiring Places'
        className='w-full h-full pl-6 pr-14 text-black outline-none'
      />
      <button className='absolute right-0 top-0 bottom-0 flex items-center justify-center w-14 bg-black text-white hover:bg-gray-800 transition-colors'>
        <Search className='h-5 w-5' />
      </button>
    </div>
  );
};

export default SearchBar;
