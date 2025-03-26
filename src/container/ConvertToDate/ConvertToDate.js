// Konvertera DT (sekunder) i API till datum.

export function ConvertToDate(dt) {

  const date = new Date(dt * 1000);
  return date.toLocaleDateString("sv-SE", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
};