// Displayar väderdatan.

import { ConvertToDate } from "../../container/ConvertToDate/ConvertToDate";
import { GetDailyForecast } from "../../container/GetDailyForecast/GetDailyForecast";
import HeartButtonContainer from "../../container/HeartButton/HeartButtonContainer";
import '../../styles/WeatherDisplay.css';

const WeatherDisplay = ({weatherData}) => {

  const dailyForecast = weatherData ? GetDailyForecast(weatherData) : [];

  return (
    <div className="WeatherDisplay">
      <div className="WeatherHeader">
        <h2>{weatherData?.city?.name}</h2>
        <HeartButtonContainer location={weatherData?.city?.name} />
      </div>
      
      {dailyForecast.map((day, index) => (
        <div className="WeatherInfo" key={index}>
          <h4>{ConvertToDate(day.dt)}</h4>
          <h4>{(day.main.temp - 273.15).toFixed(0)}°C</h4>
          <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
          <h4>L: {(day.main.temp_min - 273.15).toFixed(0)}°C / H: {(day.main.temp_max - 273.15).toFixed(0)}°C</h4>
          <h4>Luftfuktighet: {day.main.humidity}%</h4>
          <h4>Vindhastighet: {day.wind.speed.toFixed(1)} m/s</h4>
      </div>
      ))}
    </div>
  )
};

export default WeatherDisplay;