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
    Card,
    Grid,
    Box,
    Chip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Search } from "@mui/icons-material";
import { SpotifyChip } from "../components/SpotifyChip";

const drawerWidth = 350;

const bothMixins = (theme: Theme): CSSObject => ({
    backgroundColor: "transparent",
    borderRight: "none",
    padding: theme.spacing(1),
    gap: theme.spacing(1),
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    ...bothMixins(theme),
});

const closedMixin = (theme: Theme): CSSObject => ({
    ...bothMixins(theme),
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
            <Card>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            sx: {
                                fontWeight: "600",
                            },
                        }}
                    >
                        Home
                    </ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <Search />
                    </ListItemIcon>
                    <ListItemText>Search</ListItemText>
                </ListItemButton>
            </Card>
            <Card
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
                <Button>Your Library</Button>
                <NewPlaylistButton />
                <Box display="flex" flexWrap="wrap" gap="0.5rem" padding={0.5}>
                    <SpotifyChip label="Playlists" />
                    <SpotifyChip label="Podcasts & Shows" />
                    <SpotifyChip label="Albums" />
                    <SpotifyChip label="Artists" />
                    <SpotifyChip label="Downloaded" />
                    <Chip label="Downloaded" />
                </Box>
            </Card>
        </Drawer>
    );
};
