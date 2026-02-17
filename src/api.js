const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/* ===========================
   Get Weather By City
=========================== */
export const  fetchWeatherByCity = async (city, unit = "metric") => {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  const data = await res.json();

  if (!res.ok || data.cod !== 200) {
    throw new Error(data.message || "City not found");
  }

  return data;
};

/* ===========================
   Get Weather By Coordinates
=========================== */
export const fetchWeatherByCoords = async (
  lat,
  lon,
  unit = "metric"
) => {
  const res = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
  );

  const data = await res.json();

  if (!res.ok || data.cod !== 200) {
    throw new Error(data.message || "Failed to fetch location weather");
  }

  return data;
};

/* ===========================
   Get 5-Day Forecast
=========================== */
/* ===========================
   Get 5-Day Forecast
=========================== */
export const fetchForecast = async (lat, lon, unit = "metric") => {
  const res = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
  );

  const data = await res.json();

  if (!res.ok || data.cod !== "200") {
    throw new Error(data.message || "Forecast failed");
  }

  // Return only 1 forecast per day (12:00 PM)
  const dailyForecast = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return dailyForecast;
};
