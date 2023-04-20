import './App.css';
import { Person } from './Person';

function App() {
  return (
    <div className="App">
      <Person
        name="Suman"
        email="mail@gmail.com"
        age={21}
        isMarried={false}
        friends={["Prerna", "Robin", "Pankaj", "Manav"]}
      />
    </div>
  );
}

export default App;
