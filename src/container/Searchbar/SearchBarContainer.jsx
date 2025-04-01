// Logiken för sökfunktionen - anropar API för att hämta väderdata till sökt stad.

import { useState } from "react";
import SearchbarComponent from "../../components/Searchbar/SearchbarComponent";
import { getCityCord, fetchWeatherDataFive } from "../../services/WeatherService";

const SearchbarContainer = ({setWeatherData}) => {

  const [input, setInput] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!input) return;

    try {
      const {lat, lon} = await getCityCord(input);
      const weatherData = await fetchWeatherDataFive(lat, lon);
      setWeatherData(weatherData);
    } catch (error) {
      console.error("Fel vid hämtning av data.", error);
    }
  };


  return (
    <SearchbarComponent input={input} setInput={setInput} handleSearch={handleSearch} />
  )
};

export default SearchbarContainer;