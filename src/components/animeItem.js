// tripItem.js - This file is intended to display individual anime details using Bootstrap cards.

// Importing necessary modules and components
import Card from "react-bootstrap/Card"; // Card component from react-bootstrap for styling
import { Link } from "react-router-dom"; // Link component for navigation
import Button from "react-bootstrap/Button"; // Button component from react-bootstrap
import axios from "axios"; // axios for HTTP requests

// Functional component 'AnimeItem' representing a single anime card
function AnimeItem(props) {
  // Rendering the AnimeItem component
  return (
    <div>
      {/* Bootstrap Card component to display anime details */}
      <Card>
        {/* Card header displaying the anime's location */}
        <Card.Header>{props.myAnime.location}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Displaying the anime cover image */}
            <img
              src={props.myAnime.cover}
              alt="Anime cover"
              style={{
                width: "100%",
                maxWidth: "633px",
                height: "300px",
                border: "5px solid black", // Image styling
              }}
            />
            {/* Footer section containing anime description and date */}
            <footer>
              <p>{"Description: " + props.myAnime.description}</p>
              <p>{"Date of anime: " + props.myAnime.date}</p>
            </footer>
          </blockquote>
        </Card.Body>
        {/* Link to the Edit page, passing the anime's ID as a parameter */}
        <Link to={"/edit/" + props.myAnime._id} className="btn btn-primary">
          Edit
        </Link>
        {/* Button to delete the anime */}
        <Button
          variant="danger"
          onClick={(e) => {
            e.preventDefault();
            // Axios request to delete the anime by ID
            axios
              .delete("http://localhost:4000/api/anime/" + props.myAnime._id)
              .then((res) => {
                // Call the Reload function passed as a prop to refresh the anime list
                props.Reload();
              })
              .catch((error) => {
                // Error handling logic could be implemented here
              });
          }}
        >
          Delete
        </Button>
      </Card>
    </div>
  );
}

// Exporting the AnimeItem component for use in other parts of the application
export default AnimeItem;
