import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
import Modal from '../modal/modal';
import Footer from '../components/footer/footer';

const Card = ({ anime, sortOption, searchText }) => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [sortedAnime, setSortedAnime] = useState(anime);

  useEffect(() => {
    const sortFunction = (a, b) => {
      switch (sortOption) {
        case 'episodes':
          return a.episodes - b.episodes;
        case 'score':
          return a.score - b.score;
        case 'members':
          return a.members - b.members;
        default:
          return 0;
      }
    };

    setSortedAnime([...anime].sort(sortFunction));
  }, [anime, sortOption]);

  const handleCardClick = (animeItem) => {
    setSelectedAnime(animeItem);
  };

  const handleCloseModal = () => {
    setSelectedAnime(null);
  };

  const filteredAnime = sortedAnime.filter((animeItem) =>
    animeItem.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={styles.cardContainer}>
      {filteredAnime.map((animeItem) => (
        <div key={animeItem.mal_id} className={styles.card} onClick={() => handleCardClick(animeItem)}>
          <img src={animeItem.images.jpg.large_image_url} alt={animeItem.title} className={styles.image} />
          <h2>{animeItem.title}</h2>
        </div>
      ))}
      <Modal isOpen={selectedAnime !== null} onClose={handleCloseModal} animeItem={selectedAnime} />
    </div>
  );
};

export default Card;