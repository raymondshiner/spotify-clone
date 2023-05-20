import { NewPlaylistButton } from "./NewPlaylistButton";

export const HomePage = () => {
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
};
