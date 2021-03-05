
function PopUpPostIt(props) {
	return (
		<div
	      className="modal fade popUpPostIt"
	      id={"popUpPostIt"}
	      tabIndex="-1"
	      role="dialog"
	      aria-labelledby="popUpPostIt"
	      aria-hidden="true"
	    >
		    <div className="modal-dialog modal-dialog-centered" role="document">
		        <form className="modal-content">
		        	<div className="modal-header">
	            		<h5 className="modal-title" id="exampleModalLongTitle">Répondre</h5>
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
          				<select name="category">
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
          				<textarea placeholder="Saisissez votre message ici" name="message"></textarea>
          				<button type="submit" className="p-2 mt-5" data-dismiss="modal" aria-label="Close">Enregistrer</button>
		          	</div>
		       </form>
		    </div>
		</div>
	)
}

export default PopUpPostIt