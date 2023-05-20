import { HomePage } from "./HomePage/HomePage";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <HomePage />
        </ThemeProvider>
    );
}

export default App;
