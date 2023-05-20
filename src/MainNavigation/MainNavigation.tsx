import { NewPlaylistButton } from "./NewPlaylistButton";
import {
    Button,
    Drawer as MuiDrawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    CSSObject,
    Theme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Search } from "@mui/icons-material";

const drawerWidth = 350;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export const MainNavigation = () => {
    return (
        <Drawer variant="permanent" open={true}>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Search />
                    </ListItemIcon>
                    <ListItemText>Search</ListItemText>
                </ListItemButton>
            </ListItem>
            <Button>Your Library</Button>
            <Button>Playlists</Button>
            <Button>Podcasts & Shows</Button>
            <Button>Albums</Button>
            <Button>Artists</Button>
            <Button>Downloaded</Button>
            <NewPlaylistButton />
        </Drawer>
    );
};
