import SearchBar from '@/components/layout/SearchBar';
import LocationCard from '@/components/features/LocationCard';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col lg:flex-row lg:gap-20'>
        {/* Colonne gauche - Texte et recherche */}
        <div className='flex flex-col justify-start lg:w-5/12'>
          <h1 className='text-6xl font-bold leading-tight mb-6'>
            Inspiring
            <br />
            Locations
            <br />
            to Lodge
          </h1>

          <p className='text-gray-600 mb-8 max-w-md'>
            Create memorable travel moments by choosing a designer house with a
            warm ambiance as your accommodation.
          </p>

          <SearchBar />
        </div>

        {/* Colonne droite - Contenu visuel */}
        <div className='lg:w-7/12'>
          <div className='space-y-4'>
            {/* Image principale */}
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

            {/* Bannière statistiques */}
            <div className='w-full bg-black text-white rounded-full py-3 px-8 flex items-center justify-between'>
              <span className='text-xl font-bold'>2,000+</span>
              <span className='text-xl'>Unique Places</span>
            </div>

            {/* Section des locations */}
            <div className='grid grid-cols-2 gap-6 mt-2'>
              {/* Première location */}
              <div>
                <LocationCard
                  imageUrl='https://picsum.photos/id/164/800/800'
                  title='Desert Escapes'
                  mainTitle='Recommended Places'
                />
              </div>

              {/* Deuxième location */}
              <div>
                <LocationCard
                  imageUrl='https://picsum.photos/id/143/800/800'
                  title='Island Paradise'
                  mainTitle='Private Island Rentals'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
