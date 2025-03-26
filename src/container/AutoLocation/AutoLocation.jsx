// Geolocation API för att hämta användarens befintliga lokation.

import { useEffect, useState } from "react";
import { fetchWeatherDataDaily } from "../../services/WeatherService";
import AutoLocationComponent from "../../components/AutoLocation/AutoLocation";

export function AutoLocation() {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const {latitude, longitude} = position.coords;
        
        try {
          const weather = await fetchWeatherDataDaily(latitude, longitude);
          setWeatherData(weather);
        } catch (error) {
          console.error(`Troubles fetching weatherdata.`, error);
          throw error;
        };
      })
    } else {
      console.error(`Geolocation not supported by this browser.`, error)
    };
  }, []);

  return (
    <>
      {weatherData ? (
        <AutoLocationComponent weatherData={weatherData} />
      ) : (
        <p>Loading location...</p>
      )}
    </>
  )
};