import { Popper } from "@mui/material";
import { useState } from "react";

export const NewPlaylistButton = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const togglePopper = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <>
            <button data-testid="add-playlist-button" onClick={togglePopper}>
                Add Playlist
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div>Create a new playlist</div>
                <div>Create a playlist folder</div>
            </Popper>
        </>
    );
};
