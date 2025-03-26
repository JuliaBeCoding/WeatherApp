// Filtrera API på kl 12.

export function GetDailyForecast(data) {

  return data.list.filter(entry => entry.dt_txt.includes("12:00:00")).slice(0,5);
};