import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Filter, Calendar } from 'lucide-react';

export default function EntireHomesPage() {
  // Données fictives pour les maisons entières
  const properties = [
    {
      id: '1',
      imageUrl: 'https://picsum.photos/id/188/800/600', // Maison près de l'eau
      title: 'Villa Méditerranéenne avec Piscine',
      location: "Côte d'Azur, France",
      price: 850,
      rating: 4.9,
      reviewCount: 118,
      bedrooms: 4,
      bathrooms: 3,
      maxGuests: 8
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/id/250/800/600', // Plage
      title: 'Maison de Plage Moderne',
      location: 'Malibu, États-Unis',
      price: 1250,
      rating: 4.8,
      reviewCount: 95,
      bedrooms: 5,
      bathrooms: 4,
      maxGuests: 10
    },
    {
      id: '3',
      imageUrl: 'https://picsum.photos/id/326/800/600', // Villa
      title: 'Villa de Luxe avec Vue sur Mer',
      location: 'Santorin, Grèce',
      price: 1650,
      rating: 5.0,
      reviewCount: 87,
      bedrooms: 6,
      bathrooms: 5,
      maxGuests: 12
    },
    {
      id: '4',
      imageUrl: 'https://picsum.photos/id/866/800/600', // Maison moderne
      title: 'Penthouse Design au Centre-Ville',
      location: 'Barcelone, Espagne',
      price: 780,
      rating: 4.7,
      reviewCount: 103,
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 6
    },
    {
      id: '5',
      imageUrl: 'https://picsum.photos/id/437/800/600', // Bungalow
      title: 'Maison de Campagne avec Jardin',
      location: 'Toscane, Italie',
      price: 550,
      rating: 4.6,
      reviewCount: 76,
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 6
    },
    {
      id: '6',
      imageUrl: 'https://picsum.photos/id/28/800/600', // Montagne
      title: 'Chalet Luxueux avec Jacuzzi',
      location: 'Aspen, États-Unis',
      price: 1100,
      rating: 4.9,
      reviewCount: 65,
      bedrooms: 4,
      bathrooms: 3,
      maxGuests: 8
    }
  ];

  // Catégories de maisons
  const categories = [
    'Toutes',
    'Villas',
    'Penthouses',
    'Maisons de plage',
    'Chalets',
    'Maisons de campagne'
  ];

  return (
    <div className='py-12'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6'>
        Locations de Maisons Entières
      </h1>
      <p className='text-gray-600 mb-8 max-w-3xl'>
        Explorez notre collection premium de maisons entières, offrant une
        intimité parfaite et tout le confort nécessaire pour un séjour
        mémorable.
      </p>

      {/* Catégories */}
      <div className='flex overflow-x-auto pb-4 mb-6 gap-4 scrollbar-hide'>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`whitespace-nowrap px-4 py-2 rounded-full ${
              index === 0
                ? 'bg-black text-white'
                : 'bg-gray-100 hover:bg-gray-200 transition-colors'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtres */}
      <div className='flex flex-wrap gap-4 mb-8'>
        <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
          <Calendar className='h-4 w-4' />
          <span>Dates</span>
        </button>
        <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
          <span>Invités</span>
        </button>
        <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
          <Filter className='h-4 w-4' />
          <span>Filtres</span>
        </button>
      </div>

      {/* Liste des propriétés */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {properties.map(property => (
          <Link
            key={property.id}
            href={`/property/${property.id}`}
            className='group'
          >
            <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'>
              <div className='relative h-64'>
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute top-4 right-4 bg-white px-2 py-1 rounded text-sm font-medium'>
                  ${property.price} / nuit
                </div>
              </div>
              <div className='p-5'>
                <div className='flex items-center mb-2'>
                  <MapPin className='h-4 w-4 text-gray-500 mr-1' />
                  <span className='text-sm text-gray-600'>
                    {property.location}
                  </span>
                </div>
                <h3 className='text-xl font-semibold mb-2'>{property.title}</h3>
                <div className='flex justify-between mb-3'>
                  <div className='flex items-center text-sm text-gray-600'>
                    <span className='mr-3'>{property.bedrooms} chambres</span>
                    <span className='mr-3'>
                      {property.bathrooms} s. de bain
                    </span>
                    <span>Max {property.maxGuests} invités</span>
                  </div>
                </div>
                <div className='flex items-center mt-2'>
                  <div className='flex items-center'>
                    <span className='text-sm font-semibold'>
                      {property.rating}
                    </span>
                    <span className='text-xs text-gray-500 ml-1'>
                      ({property.reviewCount} avis)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
