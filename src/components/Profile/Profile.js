import React, { useEffect } from "react";
import "./Profile.css";
import avatar from "../../assets/images/avatars/dylan_bernadou.jpg";
import * as eva from 'eva-icons';

function Profile() {
	useEffect(() => {
	    document.title = "Profil - LearnPark";
	    eva.replace();
	}, []);

	return (
		<div className="profile offset-4 col-6 pb-5">
			<div className="profileHeader d-flex p-3">
				<div className="avatarContainer">
					<img src={avatar} alt="Avatar de l'utilisateur" className="avatar" />
				</div>
				<div className="d-flex flex-column justify-content-center ml-5">
					<h1>Dylan Bernadou</h1>
					<h3>Profil MBTI : Architecte</h3>
				</div>
				<div className="ml-auto">
					<i
			          data-eva="edit-outline"
			          data-eva-fill="#264653"
			          data-eva-height="1.5rem"
		          	  data-eva-width="1.5rem"
			        />
				</div>
			</div>
			<hr />
			<div className="profileDescription my-3 p-3">
				<h3>Description</h3>
				<p>Développeur junior chez Mentor Goal et étudiant à l'ETNA, je souhaite monter en compétence autant que possible et continuer de découvrir les différents aspects du métier de développeur !<br /> Je travail quotidiennement sur Symfony et React.js dans le cadre de mon travail, mais j'ai également des compétences DevOps puisque je suis responsable des mises en production et de la gestion du serveur sur lequel nous hébergeons notre produit.<br />Mon petit plaisir : Travailler des heures d'affilé sur un projet en plein nuit avec de la bonne musique et une bonne dose de café !</p>
			</div>
			<hr />
			<div className="profileInterests my-3 p-3">
				<h3>Centres d'intérêts</h3>
				<ul className="mt-3">
					<li>Jeux vidéos</li>
					<li>Sciences</li>
					<li>Nouvelles technologies</li>
					<li>Robotique</li>
				</ul>
			</div>
			<hr />
			<div className="profilePersonnality my-3 p-3">
				<h3>Personnalitée</h3>
				<ul className="mt-3">
					<li>Pramatique</li>
					<li>Logique</li>
					<li>Imaginatif</li>
				</ul>
			</div>
			<hr />
			<div className="profileCoordonates my-3 p-3">
				<h3>Coordonnées</h3>
				<h5>Email</h5>
				<p className="coordonates d-flex align-items-center">
					<i
			          data-eva="email-outline"
			          data-eva-fill="#264653"
			          data-eva-height="1.5rem"
		          	  data-eva-width="1.5rem"
			        />
			        bernadou.dylan@gmail.com
		        </p>
				<h5>Téléphone</h5>
				<p className="coordonates d-flex align-items-center">
					<i
			          data-eva="phone-outline"
			          data-eva-fill="#264653"
			          data-eva-height="1.5rem"
		          	  data-eva-width="1.5rem"
			        />
					07 82 89 27 40
				</p>
			</div>
		</div>
	);
}

export default Profile;