import { useCallback, useState } from "react";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);
  return (
    <div className="main">
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Card onClick={handleClick} />
    </div>
  );
}

export default App;
