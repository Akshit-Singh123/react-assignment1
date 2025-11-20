import React, { useState } from "react";

const CityFilter = ({ cities, onFilter }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
    onFilter(e.target.value); // pass to parent
  };

  return (
    <select value={selectedCity} onChange={handleChange} style={{ padding: "8px", margin: "10px" }}>
      <option value="">All Cities</option>
      {cities.map((city, idx) => (
        <option key={idx} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CityFilter;
