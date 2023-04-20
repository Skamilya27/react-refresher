import React from 'react';
import './App.css';
import { Person, Country } from './Person';

function App() {
  return (
    <div className="App">
       <Person
        name="Suman"
        email="mail@gmail.com"
        age={22}
        isMarried={false}
        friends={["Prerna", "Robin"]}
        country={Country.India}
        />
    </div>
  );
}

export default App;
