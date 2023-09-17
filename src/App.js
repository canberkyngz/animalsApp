import "./App.css";
import { useState } from "react";
import AnimalShow from "./showAnimals.js";

function getRandomAnimals() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animal, setAnimal] = useState([]);
  const handleClick = () => {
    setAnimal([...animal, getRandomAnimals()]);
  };
  const renderedAnimals = animal.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className="App">
      <button onClick={handleClick}>Add Animals</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
