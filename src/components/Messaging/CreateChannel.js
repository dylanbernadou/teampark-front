import React, { useState } from "react";
import "./Messaging.css";

function CreateChannel(props) {

	const handleOnChange = (e) => {
	    eval("set_" + [e.target.name] + '("' + e.target.value + '");');
	};


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
          			
          			<button className="p-2 mt-5">Enregistrer</button>
	          	</div>
	       </form>
	    </div>
	</div>
	);
}

export default CreateChannel