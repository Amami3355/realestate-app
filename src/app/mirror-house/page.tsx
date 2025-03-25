import Image from 'next/image';
import { Star } from 'lucide-react';

export default function MirrorHousePage() {
  // Données fictives pour la propriété
  const property = {
    title: 'Mirror House Sud',
    location: 'Bolzano, Italie',
    price: 450,
    rating: 4.9,
    reviewCount: 127,
    description:
      "Le Mirror House est un exemple remarquable d'architecture contemporaine, offrant une expérience de séjour unique. La façade miroir reflète le magnifique paysage environnant, créant une symbiose parfaite entre la structure et la nature. L'intérieur est meublé avec élégance, offrant tout le confort moderne tout en préservant une atmosphère minimaliste et sereine.",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      'Wi-Fi haut débit',
      'Climatisation',
      'Vue panoramique',
      'Cuisine entièrement équipée',
      'Terrasse privée',
      'Parking gratuit',
      'Télévision à écran plat',
      'Sèche-cheveux',
      'Machine à laver',
      'Sèche-linge'
    ],
    images: [
      'https://picsum.photos/id/1029/1200/800', // Vue extérieure
      'https://picsum.photos/id/184/600/400', // Salon
      'https://picsum.photos/id/208/600/400', // Chambre
      'https://picsum.photos/id/349/600/400' // Salle de bain
    ]
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-12 md:py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Informations sur la propriété */}
        <div>
          <h1 className='text-3xl md:text-4xl font-bold mb-2'>
            {property.title}
          </h1>
          <div className='flex items-center mb-4'>
            <span className='text-gray-600'>{property.location}</span>
            <div className='flex items-center ml-4'>
              <Star className='h-4 w-4 text-yellow-500 fill-yellow-500' />
              <span className='ml-1'>{property.rating}</span>
              <span className='text-gray-600 ml-1'>
                ({property.reviewCount} avis)
              </span>
            </div>
          </div>

          <div className='bg-white shadow-md rounded-lg p-6 mb-6'>
            <div className='flex justify-between items-center mb-6'>
              <div>
                <span className='text-2xl font-semibold'>
                  ${property.price}
                </span>
                <span className='text-gray-600'> / nuit</span>
              </div>
              <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors'>
                Vérifier disponibilité
              </button>
            </div>

            <div className='grid grid-cols-3 gap-4 mb-6'>
              <div className='text-center'>
                <div className='font-semibold'>{property.guests}</div>
                <div className='text-gray-600 text-sm'>Invités</div>
              </div>
              <div className='text-center'>
                <div className='font-semibold'>{property.bedrooms}</div>
                <div className='text-gray-600 text-sm'>Chambres</div>
              </div>
              <div className='text-center'>
                <div className='font-semibold'>{property.bathrooms}</div>
                <div className='text-gray-600 text-sm'>Salles de bain</div>
              </div>
            </div>

            <div className='mb-6'>
              <h3 className='text-lg font-semibold mb-2'>Description</h3>
              <p className='text-gray-600'>{property.description}</p>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Équipements</h3>
              <div className='grid grid-cols-2 gap-2'>
                {property.amenities.map((amenity, index) => (
                  <div key={index} className='flex items-center py-1'>
                    <div className='w-2 h-2 bg-black rounded-full mr-2'></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Galerie d'images */}
        <div className='space-y-4'>
          <div className='relative w-full h-[400px] rounded-lg overflow-hidden'>
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className='object-cover'
            />
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {property.images.slice(1).map((image, index) => (
              <div
                key={index}
                className='relative h-32 rounded-lg overflow-hidden'
              >
                <Image
                  src={image}
                  alt={`${property.title} - Image ${index + 2}`}
                  fill
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
