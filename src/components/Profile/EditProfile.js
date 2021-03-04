import React, { useState } from "react";
import "./Profile.css";
import DAO from "../../DAO";

function EditProfile(props) {
	const [input_phone, set_input_phone] = useState(props.user.phone ? props.user.phone : "");
	const [input_interests, set_input_interests] = useState(props.user.interests ? props.user.interests.join() : "");
	const [input_personality, set_input_personality] = useState(props.user.personality ? props.user.personality.join() : "");
	const [input_mbti, set_input_mbti] = useState(props.user.mbti ? props.user.mbti : "");
	const [input_description, set_input_description] = useState(props.user.description ? props.user.description : "");

	const api = new DAO();

	const handleOnChange = (e) => {
	    eval("set_" + [e.target.name] + '("' + e.target.value + '");');
	};

	const save = async(e) => {
		e.preventDefault();

		let interests_array;
		let personality_array;

		if (input_interests != "") {
			interests_array = input_interests.split(',');
		} else {
			interests_array = [];
		}
		if (input_personality != "") {
			personality_array = input_personality.split(',');
		} else {
			personality_array = [];
		}

		const data = {
			phone: input_phone,
			interests: interests_array,
			personality: personality_array,
			mbti: input_mbti,
			description: input_description
		}

		await api.putUser(props.user.id, data).then((response) => {
			props.update();
		})
	}

	return(
	<div
      className="modal fade modifyCandidature"
      id={"editProfile"}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modifyCandidature"
      aria-hidden="true"
    >
	    <div className="modal-dialog modal-dialog-centered" role="document">
	        <form className="modal-content">
	        	<div className="modal-header">
            		<h5 className="modal-title" id="exampleModalLongTitle">Modification du profil</h5>
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
	          		<label>Profil de personnalitée MBTI</label>
          			<input value={input_mbti} onChange={handleOnChange} type="text" name="input_mbti" placeholder="INTJ - Architecte" />
          			<label className="mt-5">Description</label>
          			<textarea value={input_description} placeholder="J'adore sortir et aller à la piscine !" onChange={handleOnChange} name="input_description"></textarea>
          			<label className="mt-5">Centres d'intérêts</label>
          			<input value={input_interests} onChange={handleOnChange} type="text" name="input_interests" placeholder="Football, Équitation, Cinéma" />
          			<label className="mt-5">Traits de personnalitée</label>
          			<input value={input_personality} onChange={handleOnChange} type="text" name="input_personality" placeholder="Curieux, Ambiteux, Pragmatique" />
          			<label className="mt-5">Téléphone</label>
          			<input value={input_phone} onChange={handleOnChange} type="phone" name="input_phone" placeholder="0102030405" />
          			<button data-dismiss="modal" aria-label="Close" type="submit" onClick={save} className="p-2 mt-5">Enregistrer</button>
	          	</div>
	       </form>
	    </div>
	</div>
	);
}

export default EditProfile