import { useState, useEffect } from 'react';
import getAnime from './api/api';
import Card from './card/card';
import './App.css';
import Header from '../src/components/header/header';
import Footer from './components/footer/footer';

const App = () => {
  const [data, setData] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [numCardsPerPage, setNumCardsPerPage] = useState(4);

  useEffect(() => {
    const getData = async () => {
      const apiData = await getAnime();
      setData(apiData.data);
    };
    getData();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / numCardsPerPage)));
  };

  const handleNumCardsChange = (num) => {
    setNumCardsPerPage(num);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * numCardsPerPage;
  const endIndex = Math.min(startIndex + numCardsPerPage, data.length);

  const filteredData = data.filter((animeItem) =>
    animeItem.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Header
        onSort={setSortOption}
        onSearch={handleSearch}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onNumCardsChange={handleNumCardsChange}
        numCardsPerPage={numCardsPerPage}
      />
      <div>
        <h1>Anime I haven't watched</h1>
        <Card anime={filteredData.slice(startIndex, endIndex)} sortOption={sortOption} searchText={searchText} />
      </div>
      <Footer/>
    </div>
  );
};

export default App;