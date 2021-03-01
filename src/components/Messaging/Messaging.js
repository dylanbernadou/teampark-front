import React, { useEffect } from "react";
import "./Messaging.css";
import avatar from "../../assets/images/avatars/dylan_bernadou.jpg";
import avatar2 from "../../assets/images/avatars/tony_stark.jpg";
import avatar3 from "../../assets/images/avatars/spider_dylan.png";
import * as eva from 'eva-icons';
import CreateChannel from "./CreateChannel";

function Messaging() {
	useEffect(() => {
	    document.title = "Messagerie - TeamPark";
	    eva.replace();

	    /*const url = new URL('http://localhost:3001/.well-known/mercure');
		url.searchParams.append('topic', 'https://localhost:8000/api/messages/{id}');
		const eventSource = new EventSource(url);

		eventSource.onmessage = event => {
		    console.log(JSON.parse(event.data));
		}*/
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
						<button className="sendMessageButton">
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
				<h4>Channels</h4>
				<div className="avatarContainer active-contact">
					<img src={avatar2} alt="user avatar" className="avatar" />
				</div>
				<div className="avatarContainer">
					<img src={avatar3} alt="user avatar" className="avatar" />
				</div>
				<CreateChannel />
				<button data-toggle="modal" data-target={"#createChannel"} type="button" data-dismiss="modal" className="addChannelButton">+</button>
			</div>
		</div>
	);
}

export default Messaging;