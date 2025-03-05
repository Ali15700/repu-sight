import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResult from './pages/SearchResult';
import Home from './pages/Home'; // Assuming you have a Home component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
