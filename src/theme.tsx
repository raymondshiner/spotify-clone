import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import { CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: { main: "#f0f0f0" },
        secondary: { main: "#1DB954" },
        mode: "dark",
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: "outlined",
            },
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
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
