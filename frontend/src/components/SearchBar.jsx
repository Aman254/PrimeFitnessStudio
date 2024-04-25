import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Implement search functionality
  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="w-full rounded-md p-2 border border-gray-300"
        placeholder="Search"
        value={query}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="ml-2 rounded-md bg-blue-500 p-2 text-white"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
