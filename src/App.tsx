import { HomePage } from "./HomePage/HomePage";
import { AppThemeProvider } from "./theme";
function App() {
    return (
        <AppThemeProvider>
            <HomePage />
        </AppThemeProvider>
    );
}

export default App;
