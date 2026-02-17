import './App.css';
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import ErrorMessage from "./components/ErrorMessage";

import {
  fetchWeatherByCity,
  fetchWeatherByCoords,
  fetchForecast
} from "./api";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");
      const data = await fetchWeatherByCity(city);
      setWeather(data);

      const forecastData = await fetchForecast(
        data.coord.lat,
        data.coord.lon
      );
      setForecast(forecastData);

    } catch (err) {
      setWeather(null);
      setForecast([]);
      setError(err.message);
    }
  };

  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const data = await fetchWeatherByCoords(
            latitude,
            longitude
          );

          setWeather(data);

          const forecastData = await fetchForecast(
            latitude,
            longitude
          );

          setForecast(forecastData);

        } catch (err) {
          setError("Failed to fetch location weather",err);
        }
      },
      () => {
        setError("Location permission denied");
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-sky-500 to-indigo-600 flex items-center justify-center p-4">
  <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl w-full max-w-3xl p-6 text-white">
    
    
      <h1>Weather App</h1>

      <SearchBar
        onSearch={handleSearch}
        onCurrentLocation={handleCurrentLocation}
      />

      <ErrorMessage message={error} />

      <WeatherCard weather={weather} />

      <Forecast forecast={forecast} />
    </div>
    </div>
  );
}

export default App;
