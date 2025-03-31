import '../../styles/FavoriteCity.css';

export const FavoriteCityComponent = ({favorites, handleSelectCity}) => {
  
  return (
    <div className="FavoriteContainer">
      <ul className="FavoriteList">
        {favorites.map((city, index) => (
          <li key={index}>
            <button onClick={() => handleSelectCity(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  )
};