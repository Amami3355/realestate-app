import SearchBar from '@/components/layout/SearchBar';
import LocationCard from '@/components/features/LocationCard';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col lg:flex-row lg:gap-8'>
        {/* Colonne gauche - Texte et recherche */}
        <div className='flex flex-col justify-start pt-0 pb-10 lg:pt-0 lg:pb-16 lg:w-5/12'>
          <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8'>
            Inspiring
            <br />
            Locations
            <br />
            to Lodge
          </h1>

          <p className='text-lg md:text-xl text-gray-600 mb-10 max-w-md'>
            Create memorable travel moments by choosing a designer house with a
            warm ambiance as your accommodation.
          </p>

          <SearchBar />
        </div>

        {/* Colonne droite - Contenu visuel */}
        <div className='lg:w-7/12 flex flex-col'>
          {/* Image principale */}
          <div className='relative min-h-[350px] lg:h-[600px] overflow-hidden rounded-3xl mb-6'>
            <Image
              src='https://picsum.photos/id/308/1400/800'
              alt='Luxury interior'
              fill
              className='object-cover'
              priority
            />

            <div className='absolute inset-0 bg-black/20'></div>

            {/* Texte en haut à gauche */}
            <div className='absolute top-10 left-10 max-w-md'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-5 text-left leading-tight'>
                Exceptional Properties Located in Stunning Surroundings
              </h2>
            </div>

            {/* Bouton en bas à gauche */}
            <div className='absolute bottom-10 left-10'>
              <button className='bg-white text-black rounded-full px-8 py-4 flex items-center justify-between w-auto min-w-[240px] whitespace-nowrap group text-base font-medium'>
                <span>Show Top-Rated Villas</span>
                <ArrowRight className='h-6 w-6 ml-4 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>

          {/* Statistiques en bannière */}
          <div className='bg-black text-white py-4 rounded-full mb-6'>
            <div className='px-12 flex justify-between items-center'>
              <div className='text-2xl md:text-3xl font-bold'>2,000+</div>
              <div className='text-2xl md:text-3xl'>Unique Places</div>
            </div>
          </div>

          {/* Section des locations */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10'>
            {/* Première location */}
            <div className='space-y-4'>
              <h3 className='text-2xl md:text-3xl font-medium'>
                Recommended
                <br />
                Places
              </h3>
              <div className='w-full max-w-md mx-auto md:mx-0'>
                <LocationCard
                  imageUrl='https://picsum.photos/id/164/800/800'
                  title='Desert Escapes'
                />
              </div>
            </div>

            {/* Deuxième location */}
            <div className='space-y-4'>
              <h3 className='text-2xl md:text-3xl font-medium'>
                Private Island
                <br />
                Rentals
              </h3>
              <div className='w-full max-w-md mx-auto md:mx-0'>
                <LocationCard
                  imageUrl='https://picsum.photos/id/143/800/800'
                  title='Island Paradise'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
