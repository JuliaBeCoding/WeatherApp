

const AutoLocationComponent = ({weatherData}) => {

  return (
    <>
      <h2>{weatherData.name}</h2>
      <h4>{(weatherData.main.temp - 273.15).toFixed(0)}°C</h4>
    </>
  );
};

export default AutoLocationComponent;