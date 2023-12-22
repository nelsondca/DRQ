// Import necessary modules
import { useParams, useNavigate } from "react-router-dom";// for routing purposes
import { useEffect, useState } from "react";// React hooks
import axios from "axios";// HTTP client for requests
import { footerStyle, Footer } from "./footer";// Custom footer component

// Define a React functional component named 'Edit' for editing anime details
export default function Edit() {
  //Retrieve the id of the anime from the URL using useParams
  let { id } = useParams();

  // State variables for storing anime details
  const [animeTitle, setAnimeTitle] = useState("");// title of the anime
  const [animeCover, setAnimeCover] = useState("");// cover image URL
  const [animeDescription, setAnimeDescription] = useState("");// description
  const [animeDate, setAnimeDate] = useState("");// watch date

  // Hook for navigating programmatically after form submission
  const navigate = useNavigate();

   // useEffect hook to fetch anime details from an API when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/anime/${id}`)// API call to get anime details
      .then((response) => {
        // Update state with the fetched anime details
        setAnimeTitle(response.data.animeTitle);
        setAnimeCover(response.data.animeCover);
        setAnimeDescription(response.data.description);
        setAnimeDate(response.data.date);
      })
      .catch((error) => {
        // Log error if the request fails
        console.log(error);
      });
  }, [id]);

   // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();// Prevent default form submission behavior

    // Construct an object with the updated anime details
    const updatedAnime = {
      title: animeTitle,
      cover: animeCover,
      description: animeDescription,
      date: animeDate,
    };

     // Make a PUT request to update the anime information
    axios
      .put(`http://localhost:4000/api/anime/${id}`, updatedAnime)
      .then(() => {
        //Navigate to the anime list page on successful update
        navigate("/anime-list");
      })
      .catch((error) => {
        // Log error if the request fails
        console.log(error);
      });
  };

  //Return the JSX for the form, adapted for editing anime details
  return (
    <div>
      <h2>Edit Anime Details</h2>
      {/* Form for editing an anime entry */}
      <form onSubmit={handleSubmit}>
        {/* Input field for anime title */}
        <div className="form-group">
          <label>Anime Title:</label>
          <input
            type="text"
            className="form-control"
            value={animeTitle}
            onChange={(e) => setAnimeTitle(e.target.value)}
          />
        </div>

        {/* Input field for anime cover URL */}
        <div className="form-group">
          <label>Anime Cover URL:</label>
          <input
            type="text"
            className="form-control"
            value={animeCover}
            onChange={(e) => setAnimeCover(e.target.value)}
          />
        </div>

        {/* Textarea for anime description */}
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={animeDescription}
            onChange={(e) => setAnimeDescription(e.target.value)}
            rows={4}
          />
        </div>

        {/* Input field for anime watch date */}
        <div className="form-group">
          <label>Watch Date:</label>
          <input
            type="text"
            className="form-control"
            value={animeDate}
            onChange={(e) => setAnimeDate(e.target.value)}
          />
        </div>

        {/* Submit button */}
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value="Update Anime"
          />
        </div>
      </form>
      {/* Footer component */}
      <Footer />
    </div>
  );
}
