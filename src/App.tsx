import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Card from "./components/card";
import Cat from "./data/cat";
import Dog from "./data/dog";
import { catData } from "./data/cat-data";
import { dogData } from "./data/dog-data";
import { v4 as uuidv4 } from "uuid";

function App(): JSX.Element {
  catData.forEach((cat) => (cat.id = uuidv4()));
  const [cats, setCats] = useState<Array<Cat>>(catData);

  dogData.forEach((dog) => (dog.id = uuidv4()));
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);

  console.log("Our pretties 😻: ", cats);
  console.log("Our besties 🐶: ", dogs);

  const catCount = cats.length;
  const dogCount = dogs.length;

  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [favFoods, setFavFoods] = useState<Array<string>>([]);
  const [birthYear, setBirthYear] = useState<number>(0);
  const [animalType, setAnimalType] = useState<string>("Cat");
  
  const addAnimal = () => {
    console.log(name, species);
    if (animalType === "Cat") {
      const newCat: Cat = {
        name,
        species,
        favFoods,
        birthYear,
      };
      newCat.id = uuidv4();
      setCats(cats.concat([newCat]));
    } else {
      const newDog: Dog = {
        name,
        species,
        favFoods,
        birthYear,
      };
      newDog.id = uuidv4();
      setDogs(dogs.concat([newDog]));
    }

    clearForm();
  };

  const clearForm = () => {
    setName("");
    setSpecies("");
    setFavFoods([]);
    setBirthYear(0);
  };

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <form>
          <h3>Add your own cat/dog!</h3>
          <input
            type="radio"
            id="cat"
            onChange={(e) => setAnimalType(e.target.value)}
            name="animal_type"
            value="Cat"
            checked={animalType === "Cat"}
          ></input>
          <label htmlFor="cat">Cat</label>
          <input
            type="radio"
            id="dog"
            onChange={(e) => setAnimalType(e.target.value)}
            name="animal_type"
            value="Dog"
            checked={animalType === "Dog"}
          ></input>
          <label htmlFor="dog">Dog</label>
          <br />
          <label>Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          ></input>
          <br />
          <label>Species:</label>
          <input
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            type="text"
          ></input>
          <br />
          <label>Favourite foods:</label>
          <input
            value={favFoods.join(",")}
            onChange={(e) => setFavFoods(e.target.value.split(","))}
            type="text"
          ></input>
          <br />
          <label>Birth year:</label>
          <input
            value={birthYear > 0 ? birthYear.toString() : ""}
            onChange={(e) => setBirthYear(parseInt(e.target.value))}
            type="text"
          ></input>
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              addAnimal();
            }}
          >
            Add
          </button>
        </form>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <Card
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              cardIndex={index}
              animalType="Cat"
            />
          ))}
          {dogs.map((dog, index) => (
            <Card
              key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              cardIndex={index + cats.length}
              animalType="Dog"
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
