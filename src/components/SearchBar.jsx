import { useState } from "react";

const SearchBar = ({ onSearch, onCurrentLocation }) => {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
          className="w-full p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-300"

        onChange={(e) => setCity(e.target.value)}
      />
      <button  
        className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-black transition duration-30 py-2 rounded-lg font-semibold shadow-md"

       onClick={handleSubmit}>Search</button>
      <button
        className="mt-3 w-full bg-blue-600 hover:bg-blue-700 transition text-black duration-300 py-2 rounded-lg font-semibold shadow-md"
 
      onClick={onCurrentLocation}>Use My Location</button>
    </div>
  );
};

export default SearchBar;
