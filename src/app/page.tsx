import SearchBar from '@/components/layout/SearchBar';
import LocationCard from '@/components/features/LocationCard';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='w-full px-4 lg:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-20'>
        {/* Titre + Description */}
        <div className='lg:col-span-5'>
          <h1 className='text-[48px] md:text-[64px] lg:text-[96px] font-bold leading-[1.1] mb-6 lg:mb-8'>
            Inspiring
            <br />
            Locations
            <br />
            to Lodge
          </h1>

          <p className='text-gray-600 text-lg lg:text-xl mb-0 max-w-md leading-relaxed'>
            Create memorable travel moments by choosing a designer house with a
            warm ambiance as your accommodation.
          </p>
        </div>

        {/* Image principale (desktop) */}
        <div className='hidden lg:block lg:col-span-7'>
          <div className='relative h-[450px] overflow-hidden rounded-3xl'>
            <Image
              src='https://picsum.photos/id/308/1400/800'
              alt='Luxury interior'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-black/10'></div>

            {/* Texte en haut à gauche */}
            <div className='absolute top-8 left-8'>
              <h2 className='text-3xl font-semibold text-white max-w-[300px] leading-tight'>
                Exceptional Properties Located in Stunning Surroundings
              </h2>
            </div>

            {/* Bouton en bas */}
            <div className='absolute bottom-8 left-8'>
              <button className='bg-white text-black rounded-full px-6 py-3 flex items-center space-x-3 group'>
                <span>Show Top-Rated Villas</span>
                <ArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>
        </div>

        {/* Barre de recherche */}
        <div className='lg:col-span-5'>
          <div className='h-[56px]'>
            <SearchBar />
          </div>
        </div>

        {/* Image principale (mobile/tablet) */}
        <div className='lg:hidden'>
          <div className='relative h-[350px] md:h-[400px] overflow-hidden rounded-3xl'>
            <Image
              src='https://picsum.photos/id/308/1400/800'
              alt='Luxury interior'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-black/10'></div>

            {/* Texte en haut à gauche */}
            <div className='absolute top-6 md:top-8 left-6 md:left-8'>
              <h2 className='text-2xl md:text-3xl font-semibold text-white max-w-[280px] md:max-w-[300px] leading-tight'>
                Exceptional Properties Located in Stunning Surroundings
              </h2>
            </div>

            {/* Bouton en bas */}
            <div className='absolute bottom-6 md:bottom-8 left-6 md:left-8'>
              <button className='bg-white text-black rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center space-x-3 group text-sm md:text-base'>
                <span>Show Top-Rated Villas</span>
                <ArrowRight className='h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>
        </div>

        {/* Bannière statistiques */}
        <div className='lg:col-span-7 lg:col-start-6'>
          <div className='h-[56px] w-full bg-black text-white rounded-full flex items-center justify-between px-6 md:px-8'>
            <span className='text-lg md:text-xl font-bold'>2,000+</span>
            <span className='text-lg md:text-xl'>Unique Places</span>
          </div>
        </div>

        {/* Cards */}
        <div className='lg:col-span-7 lg:col-start-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            <LocationCard
              imageUrl='https://picsum.photos/id/164/800/800'
              title='Desert Escapes'
              mainTitle='Recommended Places'
            />
            <LocationCard
              imageUrl='https://picsum.photos/id/143/800/800'
              title='Island Paradise'
              mainTitle='Private Island Rentals'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
