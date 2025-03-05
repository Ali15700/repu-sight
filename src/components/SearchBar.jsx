import { useNavigate } from 'react-router-dom';

const SearchBar = ({ placeholder }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <div className='max-w-xl'>
      <div className='flex'>
        <input
          type='text'
          placeholder={placeholder}
          className='flex-1 p-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
        />
        <button
          onClick={handleSearch}
          className='bg-blue-600 text-white px-8 py-4 rounded-r-lg hover:bg-blue-700 transition-colors'
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
