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

  const handleSearch = async (input, inputType = "city") => {
    try {
      setError("");
      let data;

      if (inputType === "coords") {
        // Parse coordinates (lat,lon format)
        const [lat, lon] = input.split(",").map((coord) => coord.trim());
        if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
          throw new Error("Invalid coordinates format. Use: latitude,longitude");
        }
        data = await fetchWeatherByCoords(parseFloat(lat), parseFloat(lon));
      } else if (inputType === "zip") {
        // Fetch by zip code with country code optional
        data = await fetchWeatherByCity(input);
      } else {
        // Default to city search
        data = await fetchWeatherByCity(input);
      }

      setWeather(data);

      const forecastData = await fetchForecast(data.coord.lat, data.coord.lon);
      setForecast(forecastData);
    } catch (err) {
      setWeather(null);
      setForecast([]);
      setError(err?.message || "Failed to fetch weather data");
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
  setError(err.message || "Failed to fetch location weather");
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
    
    
      <h1 className="text-3xl font-bold text-center mb-6">🌤️ Weather App</h1>
     {error && <ErrorMessage message={error} />}

      <SearchBar
        onSearch={handleSearch}
        onCurrentLocation={handleCurrentLocation}
      />


      <WeatherCard weather={weather} />

      <Forecast forecast={forecast} />
    </div>
    </div>
  );
}

export default App;
