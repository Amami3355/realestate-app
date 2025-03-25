'use client';

import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className='w-full max-w-[480px] h-[56px] relative rounded-full overflow-hidden shadow-md'>
      <input
        type='text'
        placeholder='Search for locations...'
        className='w-full h-full pl-6 pr-12 text-black outline-none'
      />
      <button className='absolute right-0 top-0 bottom-0 flex items-center justify-center w-14 bg-black text-white'>
        <Search className='h-5 w-5' />
      </button>
    </div>
  );
};

export default SearchBar;
