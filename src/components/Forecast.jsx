const Forecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  return (
   <div className="mt-8">
  <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
    {forecast.map((item, index) => (
      <div
        key={index}
        className="bg-white/30 rounded-lg p-3 text-center shadow-md"
      >
        <p className="text-sm font-semibold">
          {new Date(item.dt_txt).toLocaleDateString()}
        </p>

        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          alt=""
          className="mx-auto"
        />

        <p className="font-bold">{item.main.temp}°C</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Forecast;
