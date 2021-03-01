import React, { useEffect } from "react";
import "./SchoolPromotions.css";

function SchoolPromotions() {
	useEffect(() => {
	    document.title = "Liste des promotions - TeamPark";
	}, []);
	
	return (
		<div className="schoolPromotions offset-2 col-10 pl-5">
			<div>
			</div>
		</div>
	);
}

export default SchoolPromotions;