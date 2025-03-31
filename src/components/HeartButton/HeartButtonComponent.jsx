import '../../styles/HeartButton.css';

const HeartButtonComponent = ({ isFavorite, toggleFavorite }) => {

  return (
    <button className='HeartButton' onClick={toggleFavorite}>
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};

export default HeartButtonComponent;
