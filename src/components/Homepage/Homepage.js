import React, { useEffect } from "react";
import "./Homepage.css";

function Homepage() {
	useEffect(() => {
	    document.title = "Mur - LearnPark";
	}, []);
	
	return (
		<div className="homepage offset-2 col-10 pl-5">
			<div>
			</div>
		</div>
	);
}

export default Homepage;