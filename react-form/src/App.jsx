import { useState, useCallback } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);
  return (
    <div className="main">
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
