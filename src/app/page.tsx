import SearchBar from '@/components/layout/SearchBar';
import PropertyCard from '@/components/features/PropertyCard';
import StoryCircle from '@/components/features/StoryCircle';
import FeatureCard from '@/components/features/FeatureCard';

export default function Home() {
  // Données fictives pour les propriétés
  const properties = [
    {
      id: '1',
      imageUrl: 'https://picsum.photos/id/1039/540/320', // Montagnes
      title: 'Chalet de Montagne Luxueux',
      location: 'Alpes Suisses',
      price: 350
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/id/188/540/320', // Maison près de l'eau
      title: 'Villa Vue sur Océan',
      location: 'Costa Brava, Espagne',
      price: 420
    },
    {
      id: '3',
      imageUrl: 'https://picsum.photos/id/380/540/320', // Intérieur moderne
      title: 'Penthouse Design Contemporain',
      location: 'Berlin, Allemagne',
      price: 280
    }
  ];

  // Données fictives pour les histoires
  const stories = [
    {
      imageUrl: 'https://picsum.photos/id/152/200/200', // Scène hivernale
      title: "Aventures d'Hiver"
    },
    {
      imageUrl: 'https://picsum.photos/id/110/200/200', // Coucher de soleil
      title: 'Escapades Plage'
    },
    {
      imageUrl: 'https://picsum.photos/id/184/200/200', // Forêt
      title: 'Retraites Nature'
    },
    {
      imageUrl: 'https://picsum.photos/id/177/200/200', // Architecture
      title: 'Design et Luxe'
    }
  ];

  return (
    <div className='flex flex-col items-center w-full'>
      {/* Section Hero */}
      <section className='w-full min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-16 md:py-24'>
        <div className='max-w-6xl w-full flex flex-col items-center text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
            Inspiring Locations to Lodge
          </h1>
          <p className='text-gray-600 max-w-2xl mb-8 md:text-lg'>
            Découvrez des hébergements exceptionnels dans les destinations les
            plus prisées du monde entier.
          </p>
          <SearchBar />
          <div className='mt-8'>
            <button className='bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors'>
              Show Top-Rated Villas
            </button>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className='w-full py-12 bg-white'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
          <div className='text-center md:text-left mb-6 md:mb-0'>
            <h2 className='text-3xl font-bold'>2,000+ Unique Places</h2>
            <p className='text-gray-600 mt-2'>
              Curated for l&apos;excellence et le confort
            </p>
          </div>
          <div className='flex space-x-8'>
            <div className='text-center'>
              <span className='block text-2xl font-bold'>98%</span>
              <span className='text-gray-600'>Taux de satisfaction</span>
            </div>
            <div className='text-center'>
              <span className='block text-2xl font-bold'>50+</span>
              <span className='text-gray-600'>Pays</span>
            </div>
            <div className='text-center'>
              <span className='block text-2xl font-bold'>10k+</span>
              <span className='text-gray-600'>Clients satisfaits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Propriétés populaires */}
      <section className='w-full py-16 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold mb-8'>Hébergements populaires</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {properties.map(property => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className='w-full py-12 bg-gray-50 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold mb-8'>
            Stories d&apos;Inspiration
          </h2>
          <div className='flex space-x-8 overflow-x-auto pb-4'>
            {stories.map((story, index) => (
              <StoryCircle key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Sections de destination */}
      <section className='w-full py-16 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold mb-8'>Destinations exclusives</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <FeatureCard
              imageUrl='https://picsum.photos/id/164/800/600'
              title='Évasions désertiques'
              description='Découvrez nos hébergements luxueux au milieu des paysages désertiques à couper le souffle.'
              link='/desert-escapes'
            />
            <FeatureCard
              imageUrl='https://picsum.photos/id/143/800/600'
              title="Paradis d'île privée"
              description="Réservez votre séjour dans l'une de nos villas exclusives sur des îles privées."
              link='/island-paradise'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
