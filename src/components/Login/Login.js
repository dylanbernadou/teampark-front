import React, { useEffect } from "react";
import "./Login.css";
import illustration from "../../assets/images/login_illustration.svg";

function Login() {
	useEffect(() => {
	    document.title = "Login - LearnPark";
	}, []);

	return (
		<div className="loginPage d-flex">
			<div className="col-6 h-100">
				<form className="h-100 d-flex flex-column justify-content-center offset-2 col-8">
					<h1>LearnPark</h1>
					<h2>Bienvenue !</h2>
					<input placeholder="Email" className="my-3" />
					<input placeholder="Mot de passe" className="my-3" />
					<a href="">Mot de passe oublié ?</a>
					<button className="mt-3">Se connecter</button>
				</form>
			</div>
			<div className="col-6 h-100 d-flex">
				<img src={illustration} alt="Login" className="col-12" />
			</div>
		</div>
	);
}

export default Login;