import React from "react";
import { Jumbobuttron } from "./Jumbobuttron";
import { Navbar } from "./Navbar";
import { Cards } from "./Cards";
import { Pie } from "./Pie";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbobuttron />
			<Cards />
			<Pie/>
		</>


	);
};

export default Home;