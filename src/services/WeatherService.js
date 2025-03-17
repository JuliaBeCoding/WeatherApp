export const FetchWeather = async () => {
  try {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL = "http://api.weatherstack.com/";
    // TEST
    const location = "Stockholm";

    const url = `${API_URL}?access_key=${API_KEY}&query=${location}`

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Väderdatan gick ej att hämta")
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fel vid API-anrop", error)
  }
}