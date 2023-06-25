import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = function (number) {
    setCounter((prev) => prev + number);
  };
  const reset = () => setCounter(0);

  return (
    <div className="App">
      <h1 className="header">Counter</h1>
      <p className="number">{counter}</p>
      <button className="btn" onClick={() => handleClick(1)}>
        Increment
      </button>
      <button className="btn" onClick={() => handleClick(-1)}>
        Decrement
      </button>
      <button className="btn" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}

export default App;
