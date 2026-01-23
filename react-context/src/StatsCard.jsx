import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function StatsCard() {
  const { theme } = useContext(ThemeContext);
  console.log("StatsCard rendered");

  return (
    <div className={`stats-card ${theme}`}>
      <div className="stats-row">
        <div>
          <p className="label">Users</p>
          <h2>1,240</h2>
        </div>
        <div>
          <p className="label">Revenue</p>
          <h2>₹84k</h2>
        </div>
      </div>

      <div className="divider" />

      <p className="hint">Updated just now</p>
    </div>
  );
}
