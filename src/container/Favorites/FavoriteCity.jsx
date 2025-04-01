// Hanterar favoritade städer och skapar en knapp för easy access väderdata.

import { useEffect, useState } from "react";
import { getCityCord, fetchWeatherDataFive } from "../../services/WeatherService";
import { FavoriteCityComponent } from "../../components/Favorites/FavoriteCityComponent";

const FavoriteCity = ({ setWeatherData }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleSelectCity = async (city) => {
    try {
      const { lat, lon } = await getCityCord(city);
      const weatherData = await fetchWeatherDataFive(lat, lon);
      setWeatherData(weatherData);
    } catch (error) {
      console.error("Fel vid hämtning av väderdata:", error);
    }
  };

  return (
    <FavoriteCityComponent favorites={favorites} handleSelectCity={handleSelectCity} />
  );
};

export default FavoriteCity;
