import React, { useEffect } from "react";
import "./SchoolDashboard.css";

function SchoolDashboard() {
	useEffect(() => {
	    document.title = "Tableau de bord - TeamPark";
	}, []);
	
	return (
		<div className="schoolDashboard offset-2 col-10 pl-5">
			<div>
			</div>
		</div>
	);
}

export default SchoolDashboard;