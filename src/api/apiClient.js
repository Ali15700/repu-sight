import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async (query, searchType = 'People') => {
  try {
    const response = await apiClient.get(
      `/search/fetch-users?query=${encodeURIComponent(
        query
      )}&search_type=${searchType}`
    );
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
