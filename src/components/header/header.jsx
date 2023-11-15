import { useState } from 'react';
import photo from '../../assets/img/anime.svg';
import './header.css';

const Header = ({ onSort, onSearch, onPrevPage, onNextPage, onNumCardsChange, numCardsPerPage }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSort = (e) => {
    onSort(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  const handleNumCardsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    onNumCardsChange(num);
  };

  return (
    <div className='header'>
      <div className='wrapper'>
        <div className='func'>
          <img src={photo} alt=''></img>
        </div>
        <div className='poisk-num-card'>
          <div className='poisk'>
            <input
              type='text'
              placeholder='Поиск'
              value={searchInput}
              onChange={handleSearchChange}
            />
          </div>
          <div className='num-cards'>
            <label>
              <select value={numCardsPerPage} onChange={handleNumCardsChange}>
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
                <option value={26}>26</option>
              </select>
            </label>
          </div>
          <div className='sort'>
            <label>
              <select onChange={handleSort}>
                <option value='episodes'>episodes</option>
                <option value='score'>score</option>
                <option value='members'>members</option>
              </select>
            </label>
          </div>
          <div className='pagination'>
            <button onClick={onPrevPage}>{'<'}</button>
            <button onClick={onNextPage}>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
