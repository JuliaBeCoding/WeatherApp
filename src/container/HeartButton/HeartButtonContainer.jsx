// Logiken för hjärtfunktionen - sparar favoriserad stad lokalt samt tar bort om av-favoriserad.

import { useState, useEffect } from "react";
import HeartButtonComponent from "../../components/HeartButton/HeartButtonComponent";

const HeartButtonContainer = ({ location }) => {
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const isFavorite = favorites.includes(location);

  const toggleFavorites = () => {
    let updatedFavorites;

    if (isFavorite === true) {
      updatedFavorites = favorites.filter((city) => city !== location);
    } else {
      updatedFavorites = [...favorites, location];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return <HeartButtonComponent isFavorite={isFavorite} toggleFavorite={toggleFavorites} />;
};

export default HeartButtonContainer;
