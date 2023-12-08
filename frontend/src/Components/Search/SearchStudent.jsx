// SearchStudents.js
import React, { useState } from 'react';
import axios from 'axios';
import './Search.css'; // Import the CSS file for styling

const SearchStudents = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/students/search?query=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching students:', error);
    }
  };

  return (
    <div className="search-container">
      <h2>Search Students</h2>
      <div className="search-form">
        <input
          type="text"
          placeholder="Search by name, firstname, or email"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <ul>
        {searchResults.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchStudents;
