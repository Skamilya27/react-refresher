import "./App.css";
import { useToggle } from "./useToggle";

function App() {
  
  const [isVisible, toggle] = useToggle();
  const [isVisible1, toggle1] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>Hidden Text</h1>}

      <button onClick={toggle1}>{isVisible1 ? "hide" : "show"}</button>
      {isVisible1 && <h1>Hdden Text 1</h1>}
    </div>
  );
}

export default App;
