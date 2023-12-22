// This file is used to create a 'Read' component in React that displays a list of animes.

// Import necessary modules and components
import { useEffect, useState } from "react"; // Hooks from React
import axios from "axios"; // For making HTTP requests
import Trips from "./animes"; // Import Trips component to display animes
import Search from "./search"; // Import Search component for searching animes
import { Footer } from './footer'; // Import Footer component for page footer

// Functional component for displaying the list of animes
function Read() {
  // State variables to store the list of all animes and the filtered list
  const [data, setData] = useState([]); // Stores all animes
  const [filteredData, setFilteredData] = useState([]); // Stores filtered animes

  // useEffect hook to fetch anime data from an API when the component mounts
  useEffect(() => {
    axios.get("http://localhost:4000/api/animes")
      .then((response) => {
        setData(response.data); // Set fetched data to state
      })
      .catch((error) => {
        console.log(error); // Log any errors
      });
  }, []);

  // Function to reload data from the API
  const reload = () => {
    axios.get("http://localhost:4000/api/animes")
      .then((response) => {
        setData(response.data); // Update the state with new data
      })
      .catch((error) => {
        console.log(error); // Log errors
      });
  };

  // Function to handle search functionality
  const handleSearch = (searchTerm) => {
    const filteredAnimes = data.filter((anime) =>
      anime.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredAnimes); // Update the filtered data state
  };

  // JSX to render the Read component
  return (
    <div style={{ position: "relative" }}>
      <h2>Anime List</h2>
      <Search onSearch={handleSearch} /> 
      {/* Trips component to display list of animes, uses filteredData if available */}
      <Trips myTrips={filteredData.length > 0 ? filteredData : data} ReloadData={reload} />
      <Footer /> 
    </div>
  );
}

// Export the Read component for use in other parts of the application
export default Read;
