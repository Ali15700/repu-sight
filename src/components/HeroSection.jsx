import MyGlobe from './MyGlobe';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <main className='container mx-auto px-4 py-16 md:py-24'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Track Businesses & People{' '}
            <span className='bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>
              Worldwide
            </span>{' '}
            in Real-Time
          </h1>
          <p className='text-xl md:text-2xl text-gray-600 mb-8'>
            Monitor Global Conversations About{' '}
            <span className='text-blue-600 font-semibold'>
              Companies & Personalities
            </span>{' '}
            Across Social Media
          </p>

          <SearchBar placeholder='Enter a business or person name...' />
          <p className='text-sm text-gray-500 mt-2'>
            Discover what people are saying about businesses and public figures
            anywhere in the world
          </p>
        </div>

        <div className='hidden md:block md:w-1/2'>
          <div
            className='relative flex items-center justify-center'
            style={{ height: '400px' }}
          >
            <MyGlobe />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
