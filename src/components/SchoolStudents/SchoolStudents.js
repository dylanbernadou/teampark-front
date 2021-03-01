import React, { useEffect } from "react";
import "./SchoolStudents.css";

function SchoolStudents() {
	useEffect(() => {
	    document.title = "Liste des étudiants - TeamPark";
	}, []);
	
	return (
		<div className="schoolStudents offset-2 col-10 pl-5">
			<div>
			</div>
		</div>
	);
}

export default SchoolStudents;