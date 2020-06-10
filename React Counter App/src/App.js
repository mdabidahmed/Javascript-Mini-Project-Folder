import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="contents">
      <h1>The current count is {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      <button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  );
};

export default App;
