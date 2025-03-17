import { useState } from "react";
import { FetchWeather } from "../../services/WeatherService";

const WeatherApp = () => {

  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    // Neka tomt fält.
    if (!location) return;

    const data = await FetchWeather(location);
    setWeather(data);
    setLocation("");
  };

  return (
    <>
      <form>
        <input type="text" placeholder="Ange stad..." value={location} onChange={(e) => setLocation(e.target.value)}/>
        <button onClick={handleSearch}>Sök</button>
      </form>

      {weather && (
        <div>
          <h2>{weather.location.name}</h2>
          <p>{weather.current.temperature}</p>
        </div>
      )}
    </>
  )
};

export default WeatherApp;