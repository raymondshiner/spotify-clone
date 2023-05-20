import { NewPlaylistButton } from "./components/NewPlaylistButton";

function App() {
    return (
        <>
            <button>Home</button>
            <button>Search</button>
            <button>Your Library</button>
            <button>Playlists</button>
            <button>Podcasts & Shows</button>
            <button>Albums</button>
            <button>Artists</button>
            <button>Downloaded</button>
            <NewPlaylistButton />
        </>
    );
}

export default App;
