import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value); // pass to parent
  };

  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={value}
      onChange={handleChange}
      style={{ padding: "8px", width: "250px", margin: "10px" }}
    />
  );
};

export default SearchBar;
