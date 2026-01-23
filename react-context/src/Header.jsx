import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log("Header rendered");

  return (
    <header className="header">
      <span className="icon">☰</span>
      <h3 className="title">Dashboard</h3>

      {/* Toggle switch */}
      <div
        className={`toggle ${theme}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span className="toggle-thumb">{theme === "dark" ? "🌙" : "☀️"}</span>
      </div>
    </header>
  );
}
