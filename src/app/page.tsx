import SearchBar from '@/components/layout/SearchBar';
import StoryCircle from '@/components/features/StoryCircle';
import LocationCard from '@/components/features/LocationCard';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  // Données pour les stories
  const stories = [
    {
      imageUrl: 'https://picsum.photos/id/1062/200/200', // Personne plage
      hasPlay: true
    },
    {
      imageUrl: 'https://picsum.photos/id/1066/200/200' // Femme
    },
    {
      imageUrl: 'https://picsum.photos/id/177/200/200' // Deux personnes
    }
  ];

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col lg:flex-row lg:gap-8 lg:items-stretch min-h-[85vh] lg:min-h-0 lg:h-[580px]'>
        {/* Colonne gauche - Texte et recherche */}
        <div className='flex flex-col justify-center py-10 lg:py-16 lg:w-5/12'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'>
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

        {/* Colonne droite - Image principale */}
        <div className='relative lg:w-7/12 min-h-[350px] lg:min-h-0 overflow-hidden rounded-3xl'>
          <Image
            src='https://picsum.photos/id/308/1400/800'
            alt='Luxury interior'
            fill
            className='object-cover'
            priority
          />

          <div className='absolute inset-0 bg-black/20'></div>

          <div className='absolute top-1/2 right-0 transform -translate-y-1/2 max-w-sm text-center p-8'>
            <h2 className='text-2xl md:text-3xl font-semibold text-white mb-5 text-right'>
              Exceptional Properties Located in Stunning Surroundings
            </h2>

            <button className='ml-auto bg-white text-black rounded-full px-6 py-3 flex items-center justify-between w-auto min-w-[220px] whitespace-nowrap group'>
              <span>Show Top-Rated Villas</span>
              <ArrowRight className='h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform' />
            </button>
          </div>
        </div>
      </div>

      {/* Statistiques en bannière */}
      <div className='bg-black text-white py-4 -mx-6 lg:-mx-12 xl:-mx-20 my-6 rounded-full'>
        <div className='px-12 flex justify-between items-center'>
          <div className='text-2xl md:text-3xl font-bold'>2,000+</div>
          <div className='text-2xl md:text-3xl'>Unique Places</div>
        </div>
      </div>

      {/* Section des locations */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-8'>
        {/* Première location */}
        <div className='space-y-4'>
          <h3 className='text-2xl md:text-3xl'>
            Recommended
            <br />
            Places
          </h3>
          <LocationCard
            imageUrl='https://picsum.photos/id/164/800/600'
            title='Desert Escapes'
          />
        </div>

        {/* Deuxième location */}
        <div className='space-y-4'>
          <h3 className='text-2xl md:text-3xl'>
            Private Island
            <br />
            Rentals
          </h3>
          <LocationCard
            imageUrl='https://picsum.photos/id/143/800/600'
            title='Island Paradise'
          />
        </div>
      </div>

      {/* Section des stories */}
      <div className='py-8 flex items-center'>
        <div className='relative w-20 h-20 flex items-center justify-center'>
          <div className='absolute w-full h-full border border-gray-200 rounded-full flex flex-col items-center justify-center'>
            <span className='text-xs uppercase'>Stories</span>
          </div>
        </div>

        <div className='flex ml-6 space-x-5'>
          {stories.map((story, index) => (
            <StoryCircle
              key={index}
              imageUrl={story.imageUrl}
              title={story.hasPlay ? undefined : ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
