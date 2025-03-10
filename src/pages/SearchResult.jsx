import { HiOutlineArrowRight, HiOutlineUsers } from 'react-icons/hi';
import SearchBar from '../components/SearchBar';
import useDataStore from '../store/useDataStore';
import Logo from '../components/common/Logo';

function SearchResult() {
  const { data, loading, error } = useDataStore();

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          {/* Top section with logo and login */}
          <div className='flex justify-between items-center mb-4'>
            <Logo />
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
            {['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'TikTok'].map(
              (filter) => (
                <button
                  key={filter}
                  className={`py-4 px-1 border-b-2 font-medium ${
                    filter === 'Twitter'
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
          <div className='text-gray-700 flex items-center gap-2'>
            <HiOutlineUsers className='w-5 h-5' />
            <span className='font-bold'>
              {loading
                ? '...'
                : `${data?.twitterUsers?.timeline?.length || 0} accounts found`}
            </span>
          </div>
          <button className='text-gray-600 hover:text-gray-900'>
            About these results
          </button>
        </div>

        {loading ? (
          <div className='flex justify-center items-center py-12'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500'></div>
          </div>
        ) : data?.twitterUsers?.timeline?.length ? (
          <div className='space-y-4'>
            {data.twitterUsers.timeline.map((user) =>
              user.name && user.screen_name ? (
                <a
                  href={`https://x.com/${user.screen_name}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={user.user_id}
                  className='bg-white p-6 rounded-lg border hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between'
                >
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 rounded-full overflow-hidden'>
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='font-medium text-base'>{user.name}</h3>
                      <p className='text-gray-500'>@{user.screen_name}</p>
                    </div>
                  </div>
                  <HiOutlineArrowRight className='text-gray-400 w-5 h-5' />
                </a>
              ) : null
            )}
          </div>
        ) : (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>
              No people or businesses found with this search.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default SearchResult;
