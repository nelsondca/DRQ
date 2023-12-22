// Import modules
import { footerStyle, Footer } from "./footer"; // Adjust the path based on your project structure

// React functional component for the main content
function Content() {
  // Styles for the images
  const imageStyle = {
    width: "100%",
    maxWidth: "633px",
    height: "300px",
    margin: "1px",
    border: "5px solid black",
    transition: "transform 0.2s", // Add a smooth transition effect
  };

  // Styles for the grid container
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2px", // Reduce the gap between images
    justifyContent: "center", // Center the container horizontally
  };

  // Styles for the main content container
  const contentContainerStyle = {
    padding: "20px", // Add padding for spacing
    textAlign: "left", // Align text to the left
  };

  return (
    //Header
    <div>
      <h1>Your Ultimate Anime Companion</h1>
      <p></p>
      <h2>Time {new Date().toLocaleTimeString()}</h2>
      <h2> {new Date().toLocaleDateString()}</h2>
      <p></p>
      <h3>TOP 3 animes of the week</h3>
      <br></br>

      {/* Grid container for images */}
      <div style={gridContainerStyle}>
        {/* Individual images with links */}
        <a
          href="https://en.wikipedia.org/wiki/Death_Note"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/dnote.jpg" alt="Death Note" style={imageStyle} />
        </a>

        <a
          href="https://en.wikipedia.org/wiki/Berserk_(manga)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/berserk.jpg" alt="Berserk" style={imageStyle} />
        </a>

        <a
          href="https://en.wikipedia.org/wiki/One_Piece"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/onepiece.jpg" alt="One Piece" style={imageStyle} />
        </a>
      </div>
      <br></br>
      <p></p>

      <h6>
        <p>
          Anime enthusiasts! Introducing Anime Companion, a platform dedicated
          to anime fans who cherish keeping track of the anime they've watched,
          discovering new titles, and sharing their experiences with a
          like-minded community.
        </p>
        <p>
          Added two essential websites at the end for those interested in
          exploring the anime world further. MyAnimeList offers a comprehensive
          database and community for anime and manga, allowing you to organize,
          score, and review your favorite titles. Crunchyroll, on the other
          hand, is a premier streaming service offering a wide selection of
          anime shows and manga. These resources are invaluable for both
          newcomers and seasoned fans looking to deepen their engagement with
          the vibrant world of anime.
        </p>
      </h6>
      <ul>
        <a
          href="https://myanimelist.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MyAnimeList
        </a>
        <p></p>
        <a
          href="https://www.crunchyroll.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crunchyroll
        </a>
      </ul>
      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

// Exporting the styles and the component for use in other files
export default Content;
