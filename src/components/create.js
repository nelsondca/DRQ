// Importing the useState hook from React for state management within the component
import { useState } from "react";
import axios from "axios"; // Importing axios for making HTTP requests (such as POST requests)
import { footerStyle, Footer } from "./footer"; // Importing footer styles and the Footer component from the footer file for use in this component

// Style object for the main content container, using flexbox for layout
const contentContainerStyle = {
  display: "flex",
  padding: "20px",
  textAlign: "left",
};

// Style object for the form container, defining its flex ratio
const formContainerStyle = {
  flex: 1,
};

// The main functional component for creating an anime log entry
const imageContainerStyle = {
  marginLeft: "10px", // Adjusted margin to move the image more to the left
  marginRight: "200px", // Added margin to bring the image closer to the forms
  marginTop: "50px", // Adjusted top margin for the image
  textAlign: "left",
};

// Style object for images, making them rounded and setting a border
const roundedImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "10%", // Added border-radius to make it circular
  border: "20px solid #808080", // Added a 20px gray border
};

// The main functional component for creating an anime log entry
function Create() {
  // State variables for form input fields
  const [animeTitle, setAnimeTitle] = useState("");
  const [animeCover, setAnimeCover] = useState("");
  const [animeDescription, setAnimeDescription] = useState("");
  const [animeDate, setAnimeDate] = useState("");

  // Function to handle form submission
  const handleAnimeSubmit = (e) => {
    // Prevent default form submission behavior which reloads the page
    e.preventDefault();

    // Log form input values
    console.log(
      "Anime Title: " +
        animeTitle +
        " Anime Cover: " +
        animeCover +
        " Description: " +
        animeDescription +
        " Date: " +
        animeDate
    );

    // Object representing the anime to be logged
    const anime = {
      title: animeTitle,
      cover: animeCover,
      description: animeDescription,
      date: animeDate,
    };

    // Make a POST request to the server with the anime data
    axios
      .post("http://localhost:4000/api/anime", anime)
      .then(() => {
        // Clear the form fields after submission
        setAnimeTitle("");
        setAnimeCover("");
        setAnimeDescription("");
        setAnimeDate("");
      })
      .catch((error) => {
        // Log an error if the submission fails
        console.error("Error submitting form:", error);
      });
  };

  //stylying the layout of the page
  const mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const headerStyle = {
    marginBottom: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  };

  const inputGroupStyle = {
    marginBottom: "10px",
  };

  const inputLabelStyle = {
    minWidth: "150px",
    justifyContent: "flex-end",
  };

  const inputTextStyle = {
    flex: "1",
  };

  const textareaStyle = {
    minHeight: "100px", // adjust as necessary
  };

  const submitButtonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const submitButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#008CBA", // example color
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  // Return JSX for the component
  return (
    <div style={mainContainerStyle}>
      <h2 style={headerStyle}>Anime Log</h2>
      {/* Form for adding a new anime entry */}
      <form onSubmit={handleAnimeSubmit} style={formStyle}>
        {/* Input field for anime title */}
        <div className="input-group" style={inputGroupStyle}>
          <span className="input-group-text" style={inputLabelStyle}>
            Anime Title:
          </span>
          <input
            type="text"
            placeholder="Enter Anime Title"
            className="form-control"
            style={inputTextStyle}
            value={animeTitle}
            onChange={(e) => setAnimeTitle(e.target.value)}
          />
        </div>

        {/* Input field for anime image URL */}
        <div className="input-group" style={inputGroupStyle}>
          <span className="input-group-text" style={inputLabelStyle}>
            Anime Cover URL:
          </span>
          <input
            type="text"
            placeholder="Paste the image URL here"
            className="form-control"
            style={inputTextStyle}
            value={animeCover}
            onChange={(e) => setAnimeCover(e.target.value)}
          />
        </div>

        {/* Textarea for anime description */}
        <div className="input-group" style={inputGroupStyle}>
          <span className="input-group-text" style={inputLabelStyle}>
            Description:
          </span>
          <textarea
            placeholder="Describe the anime"
            className="form-control"
            style={textareaStyle}
            value={animeDescription}
            onChange={(e) => setAnimeDescription(e.target.value)}
            rows={4}
          />
        </div>

        {/* Input field for anime watch date */}
        <div className="input-group" style={inputGroupStyle}>
          <span className="input-group-text" style={inputLabelStyle}>
            Watch Date:
          </span>
          <input
            type="text"
            placeholder="When did you watch it?"
            className="form-control"
            style={inputTextStyle}
            value={animeDate}
            onChange={(e) => setAnimeDate(e.target.value)}
          />
        </div>

        {/* Submit button */}
        <div style={submitButtonContainerStyle}>
          <button type="submit" value="Add Anime" style={submitButtonStyle}>
            Log Anime
          </button>
        </div>
      </form>
    </div>
  );
}

//Exporting the Create component for use in other parts of the application
export default Create;
