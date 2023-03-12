import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Card from './components/card';
import Cat from './data/cat';
import Dog from './data/dog';
import { catData } from './data/cat-data';
import { dogData } from './data/dog-data';
import { v4 as uuidv4 } from 'uuid';

function App(): JSX.Element {

	catData.forEach(cat => cat.id = uuidv4());
	const [cats, setCats] = useState<Array<Cat>>(catData);

	dogData.forEach(dog => dog.id = uuidv4());
	const [dogs, setDogs] = useState<Array<Dog>>(dogData);

	 console.log("Our pretties 😻: ", cats);
	 console.log("Our besties 🐶: ", dogs);

	 const catCount = cats.length;
	 const dogCount = dogs.length;

	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount} />

			<main>
				<div className='cards__wrapper'>
					{cats.map((cat, index) => <Card 
											key={cat.id}
											name={cat.name}
											species={cat.species}
											favFoods={cat.favFoods}
											birthYear={cat.birthYear}
											cardIndex={index}
									/> 
					)}
					{dogs.map((dog, index) => <Card 
											key={dog.id}
											name={dog.name}
											species={dog.species}
											favFoods={dog.favFoods}
											birthYear={dog.birthYear}
											cardIndex={index + cats.length}
									/> 
					)}
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
