import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

const Modal = ({ isOpen, onClose, animeItem }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={onClose}>
          &times;
        </div>
        <div className={styles.text}>
          <div className={styles.leftSide}>
            <img src={animeItem.images.jpg.large_image_url} alt={animeItem.title} className={styles.image} />
            <div className={styles.info}>
              <p>Episodes: {animeItem.episodes}</p>
              <p>Score: {animeItem.score}</p>
              <p>Members: {animeItem.members}</p>
              <p>{`${animeItem.aired.prop.from.day} ${getMonthName(animeItem.aired.prop.from.month)}, ${animeItem.aired.prop.from.year}`}</p>
            </div>
          </div>
          <div className={styles.rightSide}>
            <h2>{animeItem.title}</h2>
            <p>{animeItem.synopsis}</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

function getMonthName(monthNumber) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  return months[monthNumber - 1];
}

export default Modal;