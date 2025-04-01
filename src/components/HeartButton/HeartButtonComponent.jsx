// Displayar favorithjärtan, rött/vitt.

import '../../styles/HeartButton.css';

const HeartButtonComponent = ({ isFavorite, toggleFavorite }) => {

  // Ternär operator = if/else.
  return (
    <button className='HeartButton' onClick={toggleFavorite}>
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};

export default HeartButtonComponent;
