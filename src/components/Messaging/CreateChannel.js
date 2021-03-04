import React, { useEffect, useState } from "react";
import "./Messaging.css";
import DAO from "../../DAO";

function CreateChannel(props) {
	const [users, set_users] = useState([]);
	const [user_select, set_user_select] = useState("");
	const api = new DAO();

	useEffect(() => {
	    getOptionsUsers();
	}, []);

	const handleOnChange = (e) => {
	    eval("set_" + [e.target.name] + '("' + e.target.value + '");');
	};

	const getOptionsUsers = async () => {
		await api.getAllUsers().then((response) => {
			let list = response.filter(res => res.id != props.user.id);
			set_users(list);
		})
	}

	const createChannel = async(e) => {
		e.preventDefault();

		let data = {
			users: [
				"/api/users/2",
				"/api/users/3"
			]
		}

		await api.postChannels(data).then((response) => {
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