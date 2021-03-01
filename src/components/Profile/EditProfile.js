import React, { useState } from "react";
import "./Profile.css";

function EditProfile(props) {
	const [input_phone, set_input_phone] = useState(props.user.phone ? props.user.phone : "");
	const [input_interests, set_input_interests] = useState("");
	const [input_personality, set_input_personality] = useState("");
	const [input_description, set_input_description] = useState(props.user.description ? props.user.description : "");

	const handleOnChange = (e) => {
	    eval("set_" + [e.target.name] + '("' + e.target.value + '");');
	};


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
          			<label>Description</label>
          			<textarea value={input_description} placeholder="J'adore sortir et aller à la piscine !" onChange={handleOnChange} name="input_description"></textarea>
          			<label className="mt-5">Centres d'intérêts</label>
          			<input value={input_interests} onChange={handleOnChange} type="text" name="input_interests" placeholder="Football, Équitation, Cinéma" />
          			<label className="mt-5">Traits de personnalitée</label>
          			<input value={input_personality} onChange={handleOnChange} type="text" name="input_personality" placeholder="Curieux, Ambiteux, Pragmatique" />
          			<label className="mt-5">Téléphone</label>
          			<input value={input_phone} onChange={handleOnChange} type="phone" name="input_phone" placeholder="0102030405" />
          			<button className="p-2 mt-5">Enregistrer</button>
	          	</div>
	       </form>
	    </div>
	</div>
	);
}

export default EditProfile