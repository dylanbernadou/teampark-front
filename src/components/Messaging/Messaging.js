import React, { useEffect } from "react";
import "./Messaging.css";
import avatar from "../../assets/images/avatars/dylan_bernadou.jpg";
import avatar2 from "../../assets/images/avatars/tony_stark.jpg";
import avatar3 from "../../assets/images/avatars/spider_dylan.png";
import * as eva from 'eva-icons';

function Messaging() {
	useEffect(() => {
	    document.title = "Messagerie - TeamPark";
	    eva.replace();
	}, []);
	
	return (
		<div className="messaging offset-2 col-10 pl-5 d-flex">
			<div className="chat col-11">
				<div className="messages">
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className="message_send">
					<form>
						<input placeholder="Aa" />
						<button>
							<i
					          data-eva="navigation-2-outline"
					          data-eva-fill="#fff"
					          data-eva-height="2rem"
				          	  data-eva-width="2rem"
					        />
						</button>
					</form>
				</div>
			</div>
			<div className="col-1 contacts">
				<h4>Contacts</h4>
				<div className="avatarContainer active-contact">
					<img src={avatar2} alt="user avatar" className="avatar" />
				</div>
				<div className="avatarContainer">
					<img src={avatar3} alt="user avatar" className="avatar" />
				</div>

			</div>
		</div>
	);
}

export default Messaging;