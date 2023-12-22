// Import AnimeItem component
import AnimeItem from "./animeItem";

// Functional component representing a list of animes
function Animes(props) {
    // Check if myAnimes prop exists and is an array before trying to map over it
    // If myAnimes is not provided or not an array, render a fallback UI or return null
    if (!Array.isArray(props.myAnimes)) {
        return <div>No animes available</div>;
    }

    // Map through the list of animes and render an AnimeItem component for each anime
    return props.myAnimes.map((anime) => {
        // Render AnimeItem for each anime
        // Pass anime data as a prop, a unique key, and a Reload function to update the anime list
        return (
            <AnimeItem
                myAnime={anime}
                key={anime._id}
                Reload={() => { props.ReloadData(); }}
            ></AnimeItem>
        );
    });
}

// Export the Animes component
export default Animes;
