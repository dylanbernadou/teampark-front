import React, { useEffect, useState } from "react";
import "./Login.css";
import illustration from "../../assets/images/login_illustration.svg";
import DAO from "../../DAO";
import Helper from "../../Helper";


function Login() {
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [request_status, set_request_status] = useState("");
    const api = new DAO();
    const help = new Helper();
    const inputs = { email: set_email, password: set_password };

	useEffect(() => {
	    document.title = "Login - TeamPark";
	}, []);

	const handleOnChange = (e) => {
	    inputs[e.target.name](e.target.value);
	};

	const login = async (e) => {
	    set_request_status("");
	    if (!email || !password) return;
	    const regexEmail = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}";
	    if (email.search(regexEmail) < 0) return;

	    e.preventDefault();

	    const data = {
	      email: email,
	      password: password,
	    };

	    await api
	    .login(JSON.stringify(data))
	    .then((data) => {
	        set_request_status(
	          <div
	            className="alert alert-success d-flex flex-row align-items-center"
	            role="alert"
	          >
	            {" "}
	            <span
	              className="spinner-border spinner-border-sm mr-2"
	              role="status"
	              aria-hidden="true"
	            />
	            Connexion ...
	          </div>
	        );
	        console.log(data.token);
	        help.set_cookie("auth_token", data.token);
	        api.get_auth(data.token).then((data) => {
	        	console.log(data);
				window.location.href = "/wall";
	        });
	      })
	      .catch((error) => {
	        if (
	          (error.reponse && error.response.status === 401) ||
	          (error.response && error.response.status === 404)
	        )
	          set_request_status(
	            <div className="alert alert-danger" role="alert">
	              Email ou mot de passe invalide
	            </div>
	          );
	        else
	          set_request_status(
	            <div className="alert alert-danger" role="alert">
	              Une erreur est survenue ...
	            </div>
	          );
	      });
	  };


	return (
		<div className="loginPage d-flex">
			<div className="col-6 h-100">
				<form method="post" className="h-100 d-flex flex-column justify-content-center offset-2 col-8">
					<h1>TeamPark</h1>
					<h2>Bienvenue !</h2>
					<input onChange={handleOnChange} type="email" value={email} name="email" id="inputEmail" required autoFocus placeholder="Email" className="my-3" />
					<input onChange={handleOnChange} type="password" id="password" name="password" required placeholder="Mot de passe" className="my-3" />
					<a href="localhost">Mot de passe oublié ?</a>
					<button onClick={login} type="submit" className="mt-3">Se connecter</button>
				</form>
			</div>
			<div className="col-6 h-100 d-flex">
				<img src={illustration} alt="Login" className="col-12" />
			</div>
		</div>
	);
}

export default Login;