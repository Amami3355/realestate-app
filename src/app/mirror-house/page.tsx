import Image from 'next/image';
import { User, Bed, Bath, Calendar } from 'lucide-react';

export default function MirrorHousePage() {
  return (
    <div className='w-full px-4 lg:px-0'>
      <div className='max-w-[1400px] mx-auto'>
        {/* Structure en deux colonnes pour desktop */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Colonne gauche - Texte et informations */}
          <div className='lg:col-span-5 order-2 lg:order-1'>
            {/* En-tête avec titre et infos */}
            <div className='mb-8'>
              <h1 className='text-3xl font-semibold mb-1'>
                Modern Mirror House
              </h1>
              <p className='text-gray-600 mb-4'>
                Beverly Hills, Los Angeles, California
              </p>
              <div className='flex items-baseline'>
                <span className='text-2xl font-semibold'>$2,950,000</span>
                <span className='text-gray-600 ml-1'></span>
              </div>
            </div>

            {/* Bouton de réservation */}
            <div className='mb-8'>
              <div className='inline-flex items-center bg-white border border-gray-200 rounded-full hover:border-gray-300 transition-colors'>
                <span className='px-6 py-3'>Check Availability</span>
                <div className='bg-black text-white rounded-full flex items-center justify-center w-10 h-10 ml-1 mr-1'>
                  <Calendar className='h-5 w-5' />
                </div>
              </div>
            </div>

            {/* Caractéristiques principales */}
            <div className='flex space-x-12 mb-8'>
              <div className='flex flex-col items-center'>
                <User className='h-5 w-5 mb-2' />
                <span>4 Guests</span>
              </div>
              <div className='flex flex-col items-center'>
                <Bed className='h-5 w-5 mb-2' />
                <span>1 Bedroom</span>
              </div>
              <div className='flex flex-col items-center'>
                <Bath className='h-5 w-5 mb-2' />
                <span>1 Bathroom</span>
              </div>
            </div>

            {/* Description */}
            <div className='mb-8'>
              <p className='text-gray-600 leading-relaxed mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magnam, nulla. Veritatis tenetur a accusantium
                itaque amet libero dolores, harum magnam, recusandae qui
                officiis alias corrupti fugit aliquid? Minima, similique sit?
              </p>
              <button className='text-gray-800 font-medium hover:underline'>
                Show more
              </button>
            </div>

            {/* Équipements */}
            <div className='mb-12'>
              <div className='grid grid-cols-2 gap-y-4'>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-600'>→</span>
                  <span>Kitchen</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-600'>→</span>
                  <span>Wi-Fi</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-600'>→</span>
                  <span>Free parking</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-600'>→</span>
                  <span>Pool</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-600'>→</span>
                  <span>TV</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-600'>→</span>
                  <span>Washer</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-600'>→</span>
                  <span>Air conditioning</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-gray-600'>→</span>
                  <span>Hair dryer</span>
                </div>
              </div>
            </div>

            {/* Section des avis - Mobile seulement */}
            <div className='mb-8 lg:hidden'>
              <div className='flex items-center space-x-2 mb-4'>
                <span className='text-2xl font-semibold'>4.82</span>
                <span className='text-gray-600'>· 55 reviews</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Images */}
          <div className='lg:col-span-7 order-1 lg:order-2'>
            {/* Image principale */}
            <div className='relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden mb-4'>
              <Image
                src='https://picsum.photos/id/1029/1920/1080'
                alt='Modern Mirror House Exterior'
                fill
                className='object-cover'
                priority
              />
            </div>

            {/* Images secondaires */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='relative h-[180px] md:h-[240px] rounded-3xl overflow-hidden'>
                <Image
                  src='https://picsum.photos/id/416/1920/1080'
                  alt='Modern Mirror House Interior Living Space'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='relative h-[180px] md:h-[240px] rounded-3xl overflow-hidden'>
                <Image
                  src='https://picsum.photos/id/1048/1920/1080'
                  alt='Modern Mirror House Pool View'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section des avis - Desktop seulement */}
        <div className='hidden lg:block mt-16'>
          <div className='flex items-center space-x-3 mb-10'>
            <span className='text-3xl font-semibold'>4.82</span>
            <div className='flex items-center space-x-1'>
              <svg
                className='w-5 h-5 text-black'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <span className='text-gray-600 text-lg'>· 55 reviews</span>
            </div>
          </div>

          <div className='space-y-12'>
            {/* Review 1 */}
            <div className='border-t border-gray-100 pt-8'>
              <div className='flex items-center space-x-4 mb-4'>
                <div className='relative w-14 h-14 rounded-full overflow-hidden bg-gray-200'>
                  <Image
                    src='https://picsum.photos/id/64/100/100'
                    alt='Kaveh'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='font-semibold text-lg'>Kaveh</h3>
                  <p className='text-gray-600'>April 2023</p>
                </div>
              </div>
              <div className='pl-0 md:pl-18'>
                <p className='text-gray-600 leading-relaxed'>
                  Everything was great. Sabina was very kind and responsive. She
                  always answered us very quick. Check in was very smooth. The
                  building itself was amazing and the view was spectacular.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className='border-t border-gray-100 pt-8'>
              <div className='flex items-center space-x-4 mb-4'>
                <div className='relative w-14 h-14 rounded-full overflow-hidden bg-gray-200'>
                  <Image
                    src='https://picsum.photos/id/91/100/100'
                    alt='Sophie'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='font-semibold text-lg'>Sophie</h3>
                  <p className='text-gray-600'>March 2023</p>
                </div>
              </div>
              <div className='pl-0 md:pl-18'>
                <p className='text-gray-600 leading-relaxed'>
                  This mirror house exceeded all our expectations. The
                  architecture and design are simply stunning. The interior is
                  modern yet comfortable, and waking up to those views every
                  morning was incredible. Highly recommend for a special
                  occasion.
                </p>
              </div>
            </div>

            {/* Review 3 */}
            <div className='border-t border-gray-100 pt-8'>
              <div className='flex items-center space-x-4 mb-4'>
                <div className='relative w-14 h-14 rounded-full overflow-hidden bg-gray-200'>
                  <Image
                    src='https://picsum.photos/id/15/100/100'
                    alt='Marcus'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='font-semibold text-lg'>Marcus</h3>
                  <p className='text-gray-600'>February 2023</p>
                </div>
              </div>
              <div className='pl-0 md:pl-18'>
                <p className='text-gray-600 leading-relaxed'>
                  A perfect blend of luxury and nature. The mirror facade
                  creates a magical experience as it reflects the surrounding
                  landscape. The amenities were top-notch and the hosts provided
                  excellent recommendations for local activities and
                  restaurants.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section des avis - Mobile seulement */}
        <div className='block lg:hidden mt-8'>
          <div className='flex items-center space-x-3 mb-6'>
            <span className='text-2xl font-semibold'>4.82</span>
            <div className='flex items-center space-x-1'>
              <svg
                className='w-4 h-4 text-black'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <span className='text-gray-600'>· 55 reviews</span>
            </div>
          </div>

          <div className='space-y-8'>
            {/* Review 1 */}
            <div className='border-t border-gray-100 pt-6'>
              <div className='flex items-center space-x-3 mb-3'>
                <div className='relative w-12 h-12 rounded-full overflow-hidden bg-gray-200'>
                  <Image
                    src='https://picsum.photos/id/64/100/100'
                    alt='Kaveh'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='font-semibold'>Kaveh</h3>
                  <p className='text-gray-600 text-sm'>April 2023</p>
                </div>
              </div>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Everything was great. Sabina was very kind and responsive. She
                always answered us very quick. Check in was very smooth. The
                building itself was amazing and the view was spectacular.
              </p>
            </div>

            {/* Review 2 */}
            <div className='border-t border-gray-100 pt-6'>
              <div className='flex items-center space-x-3 mb-3'>
                <div className='relative w-12 h-12 rounded-full overflow-hidden bg-gray-200'>
                  <Image
                    src='https://picsum.photos/id/91/100/100'
                    alt='Sophie'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='font-semibold'>Sophie</h3>
                  <p className='text-gray-600 text-sm'>March 2023</p>
                </div>
              </div>
              <p className='text-gray-600 text-sm leading-relaxed'>
                This mirror house exceeded all our expectations. The
                architecture and design are simply stunning. The interior is
                modern yet comfortable, and waking up to those views every
                morning was incredible.
              </p>
            </div>

            {/* Review 3 */}
            <div className='border-t border-gray-100 pt-6'>
              <div className='flex items-center space-x-3 mb-3'>
                <div className='relative w-12 h-12 rounded-full overflow-hidden bg-gray-200'>
                  <Image
                    src='https://picsum.photos/id/15/100/100'
                    alt='Marcus'
                    fill
                    className='object-cover'
                  />
                </div>
                <div>
                  <h3 className='font-semibold'>Marcus</h3>
                  <p className='text-gray-600 text-sm'>February 2023</p>
                </div>
              </div>
              <p className='text-gray-600 text-sm leading-relaxed'>
                A perfect blend of luxury and nature. The mirror facade creates
                a magical experience as it reflects the surrounding landscape.
                The amenities were top-notch and the hosts provided excellent
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
