// Anropa API.

const API_KEY = "541597d2357dd1e402eb599263a9034a";


// Geocoder API - konvertera lokation till kordinater.

export const getCityCord = async (city) => {

  try {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);

    if (!response.ok)
      throw new Error(`Error fetching cordinates.`);

    const data = await response.json();
  
    return { lat:data[0].lat, lon:data[0].lon};

  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Call current weather data.

export const fetchWeatherDataDaily = async (lat, lon) => {

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    
    if (!response.ok)
      throw new Error(`Error fetching daily data.`)

    return response.json();

  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 5 day weather forecast data.

export const fetchWeatherDataFive = async (lat, lon) => {

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

    if (!response.ok)
      throw new Error(`Error fetching forecast.`)

    const data = await response.json();
  
    return data;

  } catch (error) {
    console.error(error);
    throw error;
  }
};