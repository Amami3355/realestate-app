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
          <h1 className='text-[48px] md:text-[54px] lg:text-[80px] font-bold leading-[1.1] mb-6 lg:mb-8'>
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
              src='https://picsum.photos/id/1048/1400/800'
              alt='Luxury Estate Exterior'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-black/20'></div>

            {/* Texte en haut à gauche */}
            <div className='absolute top-8 left-8 max-w-[400px]'>
              <span className='text-white/90 font-medium mb-2 inline-block'>
                Featured Properties
              </span>
              <h2 className='text-3xl font-semibold text-white leading-tight'>
                Discover Exceptional Luxury Real Estate in Prime Locations
              </h2>
            </div>

            {/* Bouton en bas */}
            <div className='absolute bottom-8 left-8'>
              <button className='bg-white text-black rounded-full px-6 py-3 flex items-center space-x-3 group hover:bg-gray-100 transition-colors'>
                <span className='font-medium'>View Featured Properties</span>
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
              src='https://picsum.photos/id/1048/1400/800'
              alt='Luxury Estate Exterior'
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-black/20'></div>

            {/* Texte en haut à gauche */}
            <div className='absolute top-6 md:top-8 left-6 md:left-8 max-w-[320px] md:max-w-[400px]'>
              <span className='text-white/90 text-sm md:text-base font-medium mb-2 inline-block'>
                Featured Properties
              </span>
              <h2 className='text-2xl md:text-3xl font-semibold text-white leading-tight'>
                Discover Exceptional Luxury Real Estate in Prime Locations
              </h2>
            </div>

            {/* Bouton en bas */}
            <div className='absolute bottom-6 md:bottom-8 left-6 md:left-8'>
              <button className='bg-white text-black rounded-full px-4 md:px-6 py-2.5 md:py-3 flex items-center space-x-3 group hover:bg-gray-100 transition-colors text-sm md:text-base'>
                <span className='font-medium'>View Featured Properties</span>
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
              title='Beverly Hills'
              mainTitle='Luxury Estates'
            />
            <LocationCard
              imageUrl='https://picsum.photos/id/143/800/800'
              title='Malibu Coast'
              mainTitle='Beachfront Villas'
            />
          </div>
        </div>
      </div>

      {/* Section Services */}
      <div className='mt-32'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            Premium Real Estate Services
          </h2>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Comprehensive expertise to meet all your real estate needs with the
            highest level of professionalism and dedication.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
          {/* Service 1 */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
            <div className='w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6'>
              <svg
                className='w-7 h-7 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-4'>Luxury Properties</h3>
            <p className='text-gray-600'>
              Access an exclusive portfolio of high-end residences, carefully
              curated for their exceptional quality and location.
            </p>
          </div>

          {/* Service 2 */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
            <div className='w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6'>
              <svg
                className='w-7 h-7 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-4'>
              Personalized Management
            </h3>
            <p className='text-gray-600'>
              Tailored property management services with meticulous attention to
              detail and your specific requirements.
            </p>
          </div>

          {/* Service 3 */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
            <div className='w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6'>
              <svg
                className='w-7 h-7 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </div>
            <h3 className='text-xl font-semibold mb-4'>Local Expertise</h3>
            <p className='text-gray-600'>
              A team of real estate professionals with deep knowledge of each
              local market to provide expert guidance.
            </p>
          </div>
        </div>

        {/* Call-to-action */}
        <div className='mt-16 text-center'>
          <button className='bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors duration-300 inline-flex items-center group'>
            <span>Explore Our Properties</span>
            <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>
      </div>
    </div>
  );
}
