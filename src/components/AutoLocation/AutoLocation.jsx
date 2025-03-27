import { ConvertToDate } from "../../container/ConvertToDate/ConvertToDate";

const AutoLocationComponent = ({weatherData}) => {

  return (
    <>
      <h2>{weatherData.name}</h2>
      <h4>{ConvertToDate(weatherData.dt)}</h4>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
      <h4>{(weatherData.main.temp - 273.15).toFixed(0)}°C</h4>
    </>
  );
};

export default AutoLocationComponent;