import { useState } from "react";
import SearchbarContainer from "./container/Searchbar/SearchBarContainer";
import { ConvertToDate } from "./container/ConvertToDate/ConvertToDate";
import { GetDailyForecast } from "./container/GetDailyForecast/GetDailyForecast";

function App() {

  const [weatherData, setWeatherData] = useState(null);

  const dailyForecast = weatherData ? GetDailyForecast(weatherData) : [];
  
  return (
    <>
      <SearchbarContainer setWeatherData={setWeatherData} />

      <h2>{weatherData?.city?.name}</h2>

      {dailyForecast.map((day, index) => (
        <div key={index}>
          <h4>{ConvertToDate(day.dt)}</h4>
          <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
          <h4>{(day.main.temp - 273.15).toFixed(0)}°C</h4>
        </div>
      ))}
    </>
  )
}

export default App;