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
      const { lat, lon } = await getCityCord(city); // Hämta koordinater
      const weatherData = await fetchWeatherDataFive(lat, lon); // Hämta väderdata
      setWeatherData(weatherData); // Uppdatera UI:t
    } catch (error) {
      console.error("Fel vid hämtning av väderdata:", error);
    }
  };

  return (
    <FavoriteCityComponent favorites={favorites} handleSelectCity={handleSelectCity} />
  );
};

export default FavoriteCity;
