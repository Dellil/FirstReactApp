import React from 'react';
import PropTypes from "prop-types"


function Food({ name, picture, rating }) {
	return (
		<div>
			<h2> I like {name} </h2>
			<h4>{rating}/5</h4>
			<img src={picture} alt={name} ></img>
		</div>

	);
}
Food.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: propTypes.number.isRequired
}

const foodILike = [
	{
		id: 1,
		name: "김치",
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Lh0CX_ZgsG1j5Ex5YD8rTQHaE7%26pid%3DApi&f=1",
		rating: 5
	},
	{
		id: 2,
		name: "삼겹살",
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1",
		rating: 4
	},
	{
		id: 3,
		name: "비빔밥",
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8BqQLDbDXIf4aoMKmzm8CwHaE8%26pid%3DApi&f=1",
		rating: 2.4
	},
	{
		id: 4,
		name: "돈까스",
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yA_81oSOni0rJS5t4dtzZgHaFT%26pid%3DApi&f=1",
		rating: 4.9
	},
	{
		id: 5,
		name: "김밥",
		image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dgBdvLWjQph6xLPpF6_u3AHaE8%26pid%3DApi&f=1",
		rating: 1.8
	}
];


function App() {
	return (
		<div className="App">
			{foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} ></Food>)}
		</div>
	);
}

export default App;
