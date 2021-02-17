import React, { useEffect }  from "react";
import "./Menu.css";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import * as eva from 'eva-icons';

function Menu() {
	useEffect(() => {
	    eva.replace();
	}, []);

	return (
		<nav className="col-2 d-flex flex-column px-4 py-5">
			<h1 className="mx-auto">LearnPark</h1>
			<NavLink className="d-flex align-items-center my-3" to="/homepage">
				<i
		          data-eva="browser-outline"
		          data-eva-fill="#FFF"
		          data-eva-height="2rem"
	          	  data-eva-width="2rem"
		        />
		        Mur
			</NavLink>
			<NavLink className="d-flex align-items-center my-3" to="/messaging">
				<i
		          data-eva="message-circle-outline"
		          data-eva-fill="#FFF"
		          data-eva-height="2rem"
	          	  data-eva-width="2rem"
		        />
		        Messagerie
			</NavLink>
			<NavLink className="d-flex align-items-center my-3" to="/drive">
				<i
		          data-eva="save-outline"
		          data-eva-fill="#FFF"
		          data-eva-height="2rem"
	          	  data-eva-width="2rem"
		        />
		        Drive
			</NavLink>
			<NavLink className="d-flex align-items-center my-3" to="/profile">
				<i
		          data-eva="person-outline"
		          data-eva-fill="#FFF"
		          data-eva-height="2rem"
	          	  data-eva-width="2rem"
		        />
		        Profil
			</NavLink>
			<NavLink className="d-flex align-items-center my-3" to="/parameters">
				<i
		          data-eva="settings-2-outline"
		          data-eva-fill="#FFF"
		          data-eva-height="2rem"
	          	  data-eva-width="2rem"
		        />
		        Paramètres
			</NavLink>
		</nav>
	);
}

export default Menu;