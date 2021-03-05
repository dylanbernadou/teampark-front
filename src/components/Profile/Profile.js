import React, { useEffect, useState } from "react";
import "./Profile.css";
import avatar from "../../assets/images/avatars/dylan_bernadou.jpg";
import * as eva from 'eva-icons';
import EditProfile from "./EditProfile";
import "bootstrap";
import $ from "jquery";
import DAO from "../../DAO";

function Profile(props) {
	const [user, set_user] = useState(props.user);

	const api = new DAO();

	useEffect(() => {
	    document.title = "Profil - TeamPark";
	    eva.replace();
	}, []);

	const updateProfil = async() => {
		await api.getUser(props.user.id).then((response) => {
			console.log(response);
			set_user(response);
		})
	}

	return (
		<div className="profile offset-4 col-6 pb-5">
			<div className="profileHeader d-flex p-3">
				<div className="avatarContainer">
					<img src={avatar} alt="Avatar de l'utilisateur" className="avatar" />
				</div>
				<div className="d-flex flex-column justify-content-center ml-5">
					<h1>{user.firstname} {user.lastname}</h1>
					<h3>Profil MBTI : {user.mbti ? user.mbti : "Non renseigné"}</h3>
				</div>
				<div className="ml-auto">
					<button data-toggle="modal" data-target={"#editProfile"} type="button" data-dismiss="modal" className="editProfileButton p-1">
						<i
				          data-eva="edit-outline"
				          data-eva-fill="#FFF"
				          data-eva-height="2rem"
			          	  data-eva-width="2rem"
				        />
			        </button>
			        <EditProfile user={user} update={updateProfil} />
				</div>
			</div>
			<hr />
			<div className="profileDescription my-3 p-3">
				<h3>Description</h3>
				<p>{user.description ? user.description : "Non renseigné"}</p>
			</div>
			<hr />
			<div className="profileInterests my-3 p-3">
				<h3>Centres d'intérêts</h3>
				{
					user.interests.length ?
					<ul className="mt-3">
						{user.interests.map((interest, i) => {
							return(<li>{interest}</li>)
						})}
					</ul>
					: <p>Non renseigné</p>
				}
			</div>
			<hr />
			<div className="profilePersonnality my-3 p-3">
				<h3>Personnalitée</h3>
				{
					user.personality.length ?
					<ul className="mt-3">
						{user.personality.map((personalityTrait, i) => {
							return(<li>{personalityTrait}</li>)
						})}
					</ul>
					: <p>Non renseigné</p>
				}
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
					{user.phone ? user.phone : "Non renseigné"}
				</p>
			</div>
		</div>
	);
}

export default Profile;