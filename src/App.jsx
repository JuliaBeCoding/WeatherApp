import { useState } from "react";
import SearchbarContainer from "./container/Searchbar/SearchBarContainer";
import { AutoLocation } from "./container/AutoLocation/AutoLocation";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import FavoriteCity from "./container/Favorites/FavoriteCity";

function App() {

  const [weatherData, setWeatherData] = useState(null);
  
  return (
    <>
      <AutoLocation />

      <SearchbarContainer setWeatherData={setWeatherData} />

      <FavoriteCity setWeatherData={setWeatherData} />

      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </>
  )
}

export default App;