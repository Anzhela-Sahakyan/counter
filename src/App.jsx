import { useState } from "react";
import "./App.css";

function App() {
  const maxNumber = 3;
  const minNumber = 1;
  const step = 0;
  const [counter, setCounter] = useState(step);

  const handleClick = function (number) {
    setCounter((prev) => {
      return prev + number;
    });
  };
  const reset = () => setCounter(0);

  return (
    <div className="App">
      <h1 className="header">Counter</h1>
      <p className="number">{counter}</p>
      <button
        className="btn"
        onClick={() => handleClick(1)}
        disabled={counter >= maxNumber}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => handleClick(-1)}
        disabled={counter < minNumber}
      >
        Decrement
      </button>
      <button className="btn" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}

export default App;
