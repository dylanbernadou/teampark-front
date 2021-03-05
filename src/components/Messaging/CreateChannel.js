import React, { useEffect, useState } from "react";
import "./Messaging.css";
import DAO from "../../DAO";

function CreateChannel(props) {
	const [users, set_users] = useState([]);
	const [user_select, set_user_select] = useState("");
	const [channel_name, set_channel_name] = useState(null);

	const api = new DAO();

	useEffect(() => {
	    getAllPartners();
	}, []);

	const handleOnChange = (e) => {
	    eval("set_" + [e.target.name] + '("' + e.target.value + '");');
	};

	const getAllPartners = async () => {
		let list_of_channels = props.channels;
		let list_of_parteners_id = [];

		list_of_channels.forEach(function(chann) {
			let partner_id = chann.users?.filter(user => user.split('/')[3] != props.user.id)[0].split('/')[3];
			if (!list_of_parteners_id.includes(partner_id)) {
				list_of_parteners_id.push(Number(partner_id));
			}
		})

		getOptionsUsers(list_of_parteners_id)
	}

	const getOptionsUsers = async (partners) => {
		await api.getAllUsers().then((response) => {
			let optionsUsers = [];
			response.forEach(function(user) {
				if (!(user.id === props.user.id || partners.includes(user.id)))
					optionsUsers.push(user);
			})
			set_users(optionsUsers);
			set_user_select(optionsUsers[0]);
		})
	}

	const createChannel = async(e) => {
		e.preventDefault();

		if (!channel_name)
			return;

		let temp = [];
		temp.push("/api/users/2");
		temp.push("/api/users/3");
		let data = {
			users: temp,
			name: channel_name
		}

		await api.postChannels(data).then((response) => {
			set_channel_name("");
			props.update();
		})
	}

	return(
	<div
      className="modal fade createChannel"
      id={"createChannel"}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="createChannel"
      aria-hidden="true"
    >
	    <div className="modal-dialog modal-dialog-centered" role="document">
	        <form className="modal-content">
	        	<div className="modal-header">
            		<h5 className="modal-title" id="exampleModalLongTitle">Créer un nouveau channel</h5>
			            <button
			              type="button"
			              className="close"
			              data-dismiss="modal"
			              aria-label="Close"
			            >
			            	<span aria-hidden="true">&times;</span>
			            </button>
	          	</div>
	          	<div className="modal-body d-flex flex-column editProfileForm">
	          		<label className="mt-3">Nom du salon</label>
	          		<input value={channel_name} onChange={handleOnChange} name="channel_name" placeholder="ex: Groupe de math"/>
          			<label className="mt-3">Choisissez l'utilisateur à ajouter au channel :</label>
          			<select value={user_select} onChange={handleOnChange} name="user_select">
          				{
          					users.map((user) => {
          						return (
          							<option value={user.id}>{user.firstname} {user.lastname}</option>
          						)
          					})
          				}
          			</select>
          			<button type="submit" onClick={createChannel} className="p-2 mt-5" data-dismiss="modal" aria-label="Close">Enregistrer</button>
	          	</div>
	       </form>
	    </div>
	</div>
	);
}

export default CreateChannel