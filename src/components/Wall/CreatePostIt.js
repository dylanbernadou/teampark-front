import React, { useState } from "react";
import "./Wall.css";
import DAO from "../../DAO";

function CreatePostIt(props) {
	const [category, set_category] = useState("Demande d'aide");
	const [message, set_message] = useState(null);
	const api = new DAO();

	const handleOnChange = (e) => {
	    eval("set_" + [e.target.name] + '("' + e.target.value + '");');
	};

	const CreatePostIt = async(e) => {
		e.preventDefault();

		const data = {
			category: category,
			message: message,
			user: "https://localhost:8000/api/users/" + props.user.id,
			/*school: "https://localhost:8000/api/schools/" + props.user.school.id*/
		};

		await api.postPostIt(JSON.stringify(data)).then((data) => {
			props.update();
		})
	}

	return(
		<div
	      className="modal fade createPostIt"
	      id={"createPostIt"}
	      tabIndex="-1"
	      role="dialog"
	      aria-labelledby="createPostIt"
	      aria-hidden="true"
	    >
		    <div className="modal-dialog modal-dialog-centered" role="document">
		        <form className="modal-content">
		        	<div className="modal-header">
	            		<h5 className="modal-title" id="exampleModalLongTitle">Ajouter un post-it</h5>
				            <button
				              type="button"
				              className="close"
				              data-dismiss="modal"
				              aria-label="Close"
				            >
				            	<span aria-hidden="true">&times;</span>
				            </button>
		          	</div>
		          	<div className="modal-body d-flex flex-column createPostItForm">
	          			<label>Categorie du post-it</label>
          				<select value={category} onChange={handleOnChange} name="category">
          					<optgroup label="Post-it pour les co-promos">
          						<option value="Demande d'aide">Demande d'aide</option>
          						<option value="Proposer un évenement">Proposer un évenement</option>
          					</optgroup>
          					<optgroup label="Post-it pour l'école">
          						<option value="Demande d'information">Demande d'information</option>
          						<option value="Demander un rendez-vous pédagogique">Demander un rendez-vous pédagogique</option>
          					</optgroup>
          					<optgroup label="Post-it pour les administrateurs du site">
          						<option value="Donner un feedback sur la plateforme">Donner un feedback sur la plateforme</option>
          						<option value="Signaler un bug">Signaler un bug</option>
          					</optgroup>
          				</select>
          				<label className="mt-3">Message</label>
          				<textarea placeholder="Saisissez votre message ici" value={message} onChange={handleOnChange} name="message"></textarea>
          				<button onClick={CreatePostIt} type="submit" className="p-2 mt-5" data-dismiss="modal" aria-label="Close">Enregistrer</button>
		          	</div>
		       </form>
		    </div>
		</div>
	);
}

export default CreatePostIt