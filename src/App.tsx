import { MainNavigation } from "./MainNavigation/MainNavigation";
import { AppThemeProvider } from "./theme";

function App() {
    return (
        <AppThemeProvider>
            <MainNavigation />
        </AppThemeProvider>
    );
}

export default App;
