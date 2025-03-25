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
      <button className='absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-black text-white hover:bg-gray-800 transition-colors rounded-full'>
        <Search className='h-5 w-5' />
      </button>
    </div>
  );
};

export default SearchBar;
