import SearchBar from '@/components/layout/SearchBar';
import LocationCard from '@/components/features/LocationCard';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-12 gap-x-20 gap-y-4'>
        {/* Première ligne - Titre et Description */}
        <div className='col-span-5'>
          <h1 className='text-[70px] font-bold leading-[1.1] mb-8'>
            Inspiring
            <br />
            Locations
            <br />
            to Lodge
          </h1>

          <p className='text-gray-600 text-xl mb-[96px] max-w-md leading-relaxed'>
            Create memorable travel moments by choosing a designer house with a
            warm ambiance as your accommodation.
          </p>
        </div>

        {/* Première ligne - Image Principale */}
        <div className='col-span-7'>
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

        {/* Deuxième ligne - SearchBar */}
        <div className='col-span-5 -mt-2'>
          <div className='h-[56px]'>
            <SearchBar />
          </div>
        </div>

        {/* Deuxième ligne - Bannière Statistiques */}
        <div className='col-span-7 -mt-2'>
          <div className='h-[56px] w-full bg-black text-white rounded-full flex items-center justify-between px-8'>
            <span className='text-xl font-bold'>2,000+</span>
            <span className='text-xl'>Unique Places</span>
          </div>
        </div>

        {/* Troisième ligne - Espace vide à gauche */}
        <div className='col-span-5'></div>

        {/* Troisième ligne - Cards */}
        <div className='col-span-7'>
          <div className='grid grid-cols-2 gap-6 mt-2'>
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
