import { HiOutlineArrowRight } from 'react-icons/hi';
import SearchBar from '../components/SearchBar';

function SearchResult() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          {/* Top section with logo and login */}
          <div className='flex justify-between items-center mb-4'>
            <div className='font-bold text-xl'>RepuSight.ai</div>
            <button className='text-gray-700 hover:text-gray-900'>
              Log In
            </button>
          </div>
          {/* Search bar section */}
          <div className='w-full max-w-xl mx-auto'>
            <SearchBar placeholder='Search for a business or person...' />
          </div>
        </div>
      </header>

      {/* Filters */}
      <nav className='border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-center space-x-8'>
            {['LinkedIn', 'Facebook', 'Instagram', 'Twitter', 'TikTok'].map(
              (filter) => (
                <button
                  key={filter}
                  className={`py-4 px-1 border-b-2 font-medium ${
                    filter === 'LinkedIn'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Results */}
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex justify-between items-center mb-6'>
          <div className='text-gray-700'>27 people found</div>
          <button className='text-gray-600 hover:text-gray-900'>
            About these results
          </button>
        </div>

        <div className='space-y-4'>
          {[
            {
              id: 1,
              name: 'Cristiano Ronaldo',
              university: 'Northeastern University',
              city: 'Boston, MA',
            },
            {
              id: 2,
              name: 'Cristiano Ronaldo',
              university: 'Harvard University',
              city: 'Cambridge, MA',
            },
            {
              id: 3,
              name: 'Cristiano Ronaldo',
              university: 'MIT',
              city: 'Cambridge, MA',
            },
            {
              id: 4,
              name: 'Cristiano Ronaldo',
              university: 'Boston University',
              city: 'Boston, MA',
            },
          ].map((person) => (
            <div
              key={person.id}
              className='bg-white p-6 rounded-lg border hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between'
            >
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xl'>
                  {person.name.charAt(0)}
                </div>
                <div>
                  <h3 className='font-medium text-base'>{person.name}</h3>
                  <p className='text-gray-500'>
                    Student at {person.university} · {person.city}
                  </p>
                </div>
              </div>
              <HiOutlineArrowRight className='text-gray-400 w-5 h-5' />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default SearchResult;
