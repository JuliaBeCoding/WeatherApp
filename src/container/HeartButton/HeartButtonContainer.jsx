import { useState, useEffect } from "react";
import HeartButtonComponent from "../../components/HeartButton/HeartButtonComponent";

const HeartButtonContainer = ({ location }) => {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Kontrollera om aktuell stad är en favorit
  const isFavorite = favorites.includes(location);

  const toggleFavorites = () => {
    let updatedFavorites;

    if (isFavorite) {
      // Ta bort staden från favoriter
      updatedFavorites = favorites.filter((city) => city !== location);
    } else {
      // Lägg till staden i favoriter
      updatedFavorites = [...favorites, location];
    }

    // Uppdatera localStorage och UI
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return <HeartButtonComponent isFavorite={isFavorite} toggleFavorite={toggleFavorites} />;
};

export default HeartButtonContainer;
