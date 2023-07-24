import React from "react";
import "./App.css";

function App() {
	const animals = ["Lion", "Cow", "Snake", "Lizard"];
	const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

	return (
		<div className="card">
			<h5 className="card-header">Featured</h5>
			<div className="card-body">
				<h5 className="card-title">Special title treatment</h5>
				<p className="card-text">
					With supporting text below as a natural lead-in to additional content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export default App;
