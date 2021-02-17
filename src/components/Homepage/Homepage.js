import React, { useRef, useEffect } from "react";
import "./Homepage.css";


function Homepage() {
	useEffect(() => {
	    document.title = "Mur - LearnPark";
	}, []);
	
	const stylePostIt = {
		'background-color': '#ffffa5',
		'transform': 'rotate(2deg)'
	};

	const stylePostIt2 = {
		'background-color': '#bc544B',
		'color': 'white',
		'transform': 'rotate(-4deg)'
	};

	const stylePostIt3 = {
		'background-color': '#52B2BF',
		'color': 'white',
		'transform': 'rotate(7deg)'
	};

	return (
		<div className="homepage offset-2 col-10 pl-5 d-flex">
			<div className="post-it col-2" style={stylePostIt}>
				<h3>John Doe</h3>
				<h5>Demande d'aide</h5>
				<p>Comment gérer les communications client-serveur svp ?</p>
				<button>Aider</button>
			</div>
			<div className="post-it col-2" style={stylePostIt2}>
				<h3>ETNA</h3>
				<h5>Soutenance</h5>
				<p>Bonjour à vous !<br /><br />Vos soutenances pour le PLI aurons lieu le 5 mars. Les heures précises vous seront communiquer par mail une semaine plus tôt.</p>
				<button>Vu</button>
			</div>
			<div className="post-it col-2" style={stylePostIt3}>
				<h3>Mr. Jacob</h3>
				<h5>Suivis</h5>
				<p>Bonjour, seriez-vous disponible ce jeudi pour un suivi pédagogique ?</p>
				<div className="d-flex justify-content-between col-10 offset-1">
					<button>Oui</button>
					<button>Non</button>
				</div>
			</div>
		</div>
	);
}

export default Homepage;