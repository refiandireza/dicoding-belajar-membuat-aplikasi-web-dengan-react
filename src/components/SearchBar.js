import React from 'react';

function SearchBar({ onSearchHandler }) {
  return (
    <div className="note--search">
      <input type="text" placeholder="Search note..." className="search--input" onChange={onSearchHandler} />
    </div>
  );
}

export default SearchBar;
