import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import { CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: { main: "#B3B3B3" },
        secondary: { main: "#1DB954" },
        mode: "dark",
        background: {
            default: "#000000",
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "12px",
                    backgroundColor: "#121212",
                    backgroundImage: "none",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: "#232323",
                },
            },
        },
        MuiListItemText: {
            defaultProps: {
                primaryTypographyProps: {
                    sx: {
                        fontWeight: "600",
                    },
                },
            },
        },
    },
});

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
