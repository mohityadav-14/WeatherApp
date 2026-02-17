const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    
     <div className="mt-6 bg-white/30 rounded-xl p-5 shadow-lg text-center">
  <h2 className="text-2xl font-bold">{weather.name}</h2>
  <p className="text-lg capitalize">{weather.weather[0].description}</p>

  <div className="flex justify-center items-center gap-4 mt-4">
    <img
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt="weather icon"
      className="w-20 h-20"
    />
    <p className="text-4xl font-bold">{weather.main.temp}°C</p>
  </div>

  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
    <p>💧 Humidity: {weather.main.humidity}%</p>
    <p>🌬 Wind: {weather.wind.speed} m/s</p>
  </div>
</div>

   
  );
};

export default WeatherCard;
