export const FetchWeather = async (location) => {
  try {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const API_URL = "https://api.weatherstack.com/";

    const url = `${API_URL}?access_key=${API_KEY}&query=${location}`

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Väderdatan gick ej att hämta")
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fel vid API-anrop", error)
    return null;
  }
}