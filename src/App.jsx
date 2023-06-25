import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const storedCounter = JSON.parse(localStorage.getItem("counter"));
  const maxNumber = 3;
  const minNumber = 1;
  const step = 1;

  const [counter, setCounter] = useState(storedCounter ?? 0);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));

    const storedCounter = JSON.parse(localStorage.getItem("counter"));
    console.log(storedCounter);
  }, [counter]);

  const handleClick = function (number) {
    setCounter((prev) => {
      console.log(localStorage);
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
        onClick={() => handleClick(step)}
        disabled={counter >= maxNumber}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => handleClick(-step)}
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
