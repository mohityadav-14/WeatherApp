const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log(import.meta.env);




const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherByCity = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();

  if (data.cod !== 200) {
    throw new Error("City not found");
  }

  return data;
};

export const fetchWeatherByCoords = async (lat, lon) => {
  const response = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  return response.json();
};

export const fetchForecast = async (lat, lon) => {
  const response = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();

  // Filter 12 PM data only
  return data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );
};
