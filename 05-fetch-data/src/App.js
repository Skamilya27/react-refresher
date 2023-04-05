import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [catFact, setCatFact] = useState("");
  const [name, setName] = useState("");
  const [ predictedAge, setPredictedAge ] = useState(null);
  const [party, setParty] = useState("");
  const [family, setFamily] = useState("");
  const [office, setOffice] = useState("");

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => {
        setPredictedAge(res.data);
      })
  };

  const fetchFamily = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/family/")
      .then((res) => {
        setFamily(res.data[0].excuse);
      })
  }

  const fetchOffice = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/office/")
      .then((res) => {
        setOffice(res.data[0].excuse);
      })
  }

  const fetchParty = () => {
    axios.get("https://excuser-three.vercel.app/v1/excuse/party/")
      .then((res) => {
        setParty(res.data[0].excuse);
      })
  }

  useEffect(() => {
    fetchFamily();
    fetchOffice();
    fetchParty();
  }, []);

  return (
    <div className="App">
      <h1>Example 1</h1>
      <button onClick={fetchCatFact}>Lets get some cat fact</button>
      <h2>{catFact}</h2>

      <h1>Example 2</h1>
      <input placeholder="Ex. Jack..." onChange={(event) => {setName(event.target.value)}}/>
      <button onClick={fetchData}>Predict Age</button>
      <h2> Name: {predictedAge?.name}</h2>
      <h2> Predicted Age: {predictedAge?.age}</h2>


      <h1>Example 3</h1>
      <h1>Lets generate some excuses😝</h1>
      <button onClick={fetchParty}>Party</button>
      <button onClick={fetchFamily}>Family</button>
      <button onClick={fetchOffice}>Office</button>

      <h3> Your party excuse: {party}</h3>
      <h3> Your party family: {family}</h3>
      <h3> Your party office: {office}</h3>
    </div>
  );
}

export default App;
