import "./App.css";
import { useState } from "react";

function App() {
  const [ count, setCount ] = useState(0);

  const increasehandler = () => {
    setCount(count + 1);
  }

  const decreaseHandler = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <button onClick={increasehandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;
