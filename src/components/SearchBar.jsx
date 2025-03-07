import { useNavigate, useLocation } from 'react-router-dom';
import useDataStore from '../store/useDataStore';
import { useState } from 'react';

const SearchBar = ({ placeholder }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getData } = useDataStore();
  const [searchQuery, setSearchQuery] = useState(location.state?.query || '');

  const handleSearch = () => {
    getData(searchQuery);
    navigate('/search', { state: { query: searchQuery } });
  };

  return (
    <div className='max-w-xl'>
      <div className='flex'>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
