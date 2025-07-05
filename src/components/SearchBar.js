import React, { useState, useContext } from "react";
import NoteContext from "../context/Notes/NoteContext";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { searchNotes } = useContext(NoteContext);

  const handleSearch = (e) => {
    e.preventDefault();
    searchNotes(query);
  };

  return (
    <div>
        <form className="d-flex mb-3 my-1" onSubmit={handleSearch}>
        <input
          className="form-control me-2 w-70 justify-content-center"
          type="search"
          placeholder="Search by title..."
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;