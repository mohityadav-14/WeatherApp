import { useState } from "react";

const SearchBar = ({ onSearch, onCurrentLocation }) => {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("city");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSearch(input, inputType);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div>
      <div className="mt-5 flex gap-2 flex-wrap">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="inputType"
            value="city"
            checked={inputType === "city"}
            onChange={(e) => setInputType(e.target.value)}
            className="cursor-pointer"
          />
          City
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="inputType"
            value="zip"
            checked={inputType === "zip"}
            onChange={(e) => setInputType(e.target.value)}
            className="cursor-pointer"
          />
          Zip Code
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="inputType"
            value="coords"
            checked={inputType === "coords"}
            onChange={(e) => setInputType(e.target.value)}
            className="cursor-pointer"
          />
          Coordinates
        </label>
      </div>

      <input
        type="text"
        placeholder={
          inputType === "city"
            ? "Enter city name (e.g., London)"
            : inputType === "zip"
            ? "Enter zip code (e.g., 10001)"
            : "Enter latitude,longitude (e.g., 40.7128,-74.0060)"
        }
        value={input}
        className="w-full p-3 mt-3 border-black rounded-lg outline-0 text-black focus:ring-2 focus:ring-blue-300"
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-black font-semibold transition duration-300 py-2 rounded-lg shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!input.trim()}
        
        onClick={handleSubmit}
      >
        Search
      </button>
      <button
        className="mt-3 w-full bg-green-600 hover:bg-green-700 text-black font-semibold transition duration-300 py-2 rounded-lg shadow-md"
        onClick={onCurrentLocation}
      >
        📍 Use My Location
      </button>
    </div>
  );
};

export default SearchBar;
