import React, { useEffect } from "react";
import "./Parameters.css";

function Parameters() {
	useEffect(() => {
	    document.title = "Paramètres - TeamPark";
	}, []);
	
	return (
		<div className="parameters offset-4 col-6 pl-5">
			<form className="d-flex flex-column p-4">
				<h2>Modifier le mot de passe</h2>
				<input placeholder="Ancien mot de passe" className="my-2" />
				<input placeholder="Nouveau mot de passe" className="my-2" />
				<input placeholder="Confirmation du nouveau mot de passe" className="my-2" />
				<button className="mt-4">Confirmer</button>
			</form>
		</div>
	);
}

export default Parameters;