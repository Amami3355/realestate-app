import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, MapPin } from 'lucide-react';

export default function CabinsCottagesPage() {
  // Données fictives pour les cabanes et chalets
  const properties = [
    {
      id: '1',
      imageUrl: 'https://picsum.photos/id/1039/800/600', // Vue montagne
      title: 'Chalet Alpin Luxueux',
      location: 'Alpes Suisses',
      price: 350,
      rating: 4.8,
      reviewCount: 85,
      features: ['2 chambres', 'Vue panoramique', 'Jacuzzi']
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/id/42/800/600', // Chalet
      title: 'Cabane Rustique au Bord du Lac',
      location: "Lac d'Annecy, France",
      price: 275,
      rating: 4.7,
      reviewCount: 62,
      features: ['1 chambre', 'Accès lac', 'Terrasse']
    },
    {
      id: '3',
      imageUrl: 'https://picsum.photos/id/164/800/600', // Désert
      title: 'Cabane Moderne dans la Forêt',
      location: 'Forêt de Fontainebleau, France',
      price: 310,
      rating: 4.9,
      reviewCount: 93,
      features: ['2 chambres', 'Architecture unique', 'Poêle à bois']
    },
    {
      id: '4',
      imageUrl: 'https://picsum.photos/id/29/800/600', // Montagne
      title: 'Chalet avec Vue sur Mont Blanc',
      location: 'Chamonix, France',
      price: 420,
      rating: 4.9,
      reviewCount: 74,
      features: ['3 chambres', 'Sauna', 'Vue sur montagne']
    },
    {
      id: '5',
      imageUrl: 'https://picsum.photos/id/133/800/600', // Forêt
      title: 'Cottage dans les Highlands',
      location: 'Highlands, Écosse',
      price: 290,
      rating: 4.6,
      reviewCount: 58,
      features: ['2 chambres', 'Cheminée', 'Jardin']
    },
    {
      id: '6',
      imageUrl: 'https://picsum.photos/id/252/800/600', // Neige
      title: 'Cabane Nordique avec Sauna',
      location: 'Laponie, Finlande',
      price: 380,
      rating: 4.8,
      reviewCount: 49,
      features: ['1 chambre', 'Sauna', 'Aurores boréales']
    }
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6'>Cabanes & Chalets</h1>
      <p className='text-gray-600 mb-8 max-w-3xl'>
        Découvrez notre sélection exclusive de cabanes et chalets, offrant une
        échappée parfaite en pleine nature avec tout le confort moderne.
      </p>

      {/* Filtres */}
      <div className='flex flex-col md:flex-row items-center justify-between mb-8 gap-4'>
        <div className='w-full md:w-auto relative'>
          <input
            type='text'
            placeholder='Rechercher par emplacement...'
            className='w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black'
          />
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
        </div>
        <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
          <Filter className='h-4 w-4' />
          <span>Filtres</span>
        </button>
      </div>

      {/* Liste des propriétés */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {properties.map(property => (
          <div
            key={property.id}
            className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'
          >
            <div className='relative h-60'>
              <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                className='object-cover'
              />
              <div className='absolute bottom-4 left-4 flex items-center bg-black bg-opacity-50 text-white px-3 py-1 rounded-full'>
                <MapPin className='h-4 w-4 mr-1' />
                <span className='text-sm'>{property.location}</span>
              </div>
            </div>
            <div className='p-5'>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='text-xl font-semibold'>{property.title}</h3>
                <div className='flex items-center'>
                  <span className='text-sm font-semibold'>
                    {property.rating}
                  </span>
                  <span className='text-xs text-gray-500 ml-1'>
                    ({property.reviewCount})
                  </span>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 mb-3'>
                {property.features.map((feature, index) => (
                  <span
                    key={index}
                    className='bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded'
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className='flex justify-between items-center mt-4'>
                <div>
                  <span className='text-xl font-semibold'>
                    ${property.price}
                  </span>
                  <span className='text-gray-500 text-sm'> / nuit</span>
                </div>
                <Link
                  href={`/property/${property.id}`}
                  className='text-sm font-medium bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors'
                >
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
