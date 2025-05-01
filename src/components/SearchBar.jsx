import { useState } from "react";
import PropTypes from "prop-types";

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  

export default function SearchBar ({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) onSearch(city);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search Weather</button>
    </div>
  );
};


