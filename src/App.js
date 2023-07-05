import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleDecrease = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;
