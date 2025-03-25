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
      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]'>
        {/* Colonne gauche - Texte et recherche */}
        <div className='flex flex-col justify-center py-10'>
          <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-8'>
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
        <div className='relative min-h-[400px] lg:min-h-0'>
          <div className='absolute inset-0'>
            <Image
              src='https://picsum.photos/id/167/1200/800'
              alt='Luxury interior'
              fill
              className='object-cover'
            />

            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/5'></div>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xs text-center p-8'>
              <h2 className='text-3xl font-semibold text-white mb-4'>
                Exceptional Properties Located in Stunning Surroundings
              </h2>

              <button className='bg-white text-black rounded-full px-6 py-3 flex items-center justify-between w-full group'>
                <span>Show Top-Rated Villas</span>
                <ArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques en bannière */}
      <div className='bg-black text-white py-4 -mx-4 sm:-mx-6 md:-mx-8'>
        <div className='px-4 sm:px-6 md:px-8 flex justify-between items-center'>
          <div className='text-2xl font-bold'>2,000+</div>
          <div className='text-2xl'>Unique Places</div>
        </div>
      </div>

      {/* Section des locations */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-10'>
        {/* Première location */}
        <div className='space-y-4'>
          <h3 className='text-2xl'>
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
          <h3 className='text-2xl'>
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
      <div className='py-10 flex items-center'>
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
