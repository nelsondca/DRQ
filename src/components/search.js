// Importing React and useState hook from the React library
import React, { useState } from "react";

// This object contains CSS styles for the search container
const searchContainerStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  textAlign: "right",
};

// Functional component 'Search' for handling the search functionality
function Search({ onSearch }) {
  // State hook for managing the search term input
  const [searchTerm, setSearchTerm] = useState("");

  // Function to execute the search and call the onSearch prop with the search term
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  // Additional styling objects for the search component
  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    background: '#f0f0f0', // Light grey background for better visibility
  };
  
  const formStyle = {
    display: 'flex',
    alignItems: 'center', // Aligns items vertically in the center
  };
  
  const inputStyle = {
    padding: '8px 15px',
    margin: '0 8px',
    border: '1px solid #ccc', // Light grey border
    borderRadius: '4px', // Rounded corners
    fontSize: '16px',
    flex: '1', // Flex grow to take up available space
  };
  
  const buttonStyle = {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '4px',
    background: '#007bff', // Blue background color
    color: 'white',
    cursor: 'pointer', // Changes cursor to pointer on hover
    fontSize: '16px',
  };

  // Rendering the Search component
  return (
    <div style={searchContainerStyle}>
      <form onSubmit={handleSearch} style={formStyle}>
        <input
          type="text"
          placeholder="Search for an anime..."
          style={inputStyle}
          onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
        />
        <button type="submit" style={buttonStyle}>Go</button>
      </form>
    </div>
  );
}

// Exporting the Search component for use in other parts of the application
export default Search;
