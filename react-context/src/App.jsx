import { ThemeProvider } from "./ThemeContextProvider";
import Header from "./Header";
import StatsCard from "./StatsCard";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <StatsCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
