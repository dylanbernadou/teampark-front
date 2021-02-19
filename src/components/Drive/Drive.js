import React, { useEffect } from "react";
import "./Drive.css";

function Drive() {
	useEffect(() => {
	    document.title = "Drive - TeamPark";
	}, []);
	
	return (
		<div className="drive offset-2 col-10 pl-5">
			<div>
			</div>
		</div>
	);
}

export default Drive;