import React from "react";

//create your first component
const Home = () => {
	return (
		<div className="container bg-body-secondary mt-2 py-5">
			<h1 className="display-5 fw-bold">A Warm Welcome!</h1>
			<p>
			Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking
			</p>
			<a href="#" className="btn btn-primary">
				Call to action!
			</a>
		</div>
	);
};

export default Home;