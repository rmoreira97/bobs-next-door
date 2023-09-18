import React from "react";

function Search({ onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search names..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
