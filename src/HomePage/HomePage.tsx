import { NewPlaylistButton } from "./NewPlaylistButton";
import { Button } from "@mui/material";

export const HomePage = () => {
    return (
        <>
            <Button>Home</Button>
            <Button>Search</Button>
            <Button>Your Library</Button>
            <Button>Playlists</Button>
            <Button>Podcasts & Shows</Button>
            <Button>Albums</Button>
            <Button>Artists</Button>
            <Button>Downloaded</Button>
            <NewPlaylistButton />
        </>
    );
};
