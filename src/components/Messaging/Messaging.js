import React, { useEffect } from "react";
import "./Messaging.css";
import avatar from "../../assets/images/avatars/dylan_bernadou.jpg";
import avatar2 from "../../assets/images/avatars/tony_stark.jpg";
import avatar3 from "../../assets/images/avatars/spider_dylan.png";

function Messaging() {
	useEffect(() => {
	    document.title = "Messagerie - LearnPark";
	}, []);
	
	return (
		<div className="messaging offset-2 col-10 pl-5 d-flex">
			<div className="chat col-11">
				<div className="messages">
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Hey ! Comment vous allez ?</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Yo ! ça va et toi ? La forme ?</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Tranquille tranquille, je suis un train de dev un petit projet pour l'ETNA là, c'est plutôt sympa</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>ça m'a l'air sympa, hésite pas à partager quelques screenshot à l'occas' !</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Ouais tkt dès que ça a un peu avancer je t'envoie ça</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Thanks, perso jsuis en train de bosser sur ma ptite armure oklm</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Ah ouais lourd, tu vas pouvoir encore de la péter auprès des autres avengers</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Plus que ça, je vais tous leur clouer le bec, j'utilise de la nanotech cette fois c'est vraiment vener</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>Quel crack, tu me feras test hein</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Evidemment, je viendrais te voir avec !</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar} alt="user avatar" className="avatar" />
						</div>
						<p>ça c'est vraiment lourd ! Te plante pas dans l'atlantique hein</p>
					</div>
					<div className="rowChat">
						<div className="avatarContainer">
							<img src={avatar2} alt="user avatar" className="avatar" />
						</div>
						<p>Aucun problème, j'ai autonomie illimitée y'a aucun chance que ça arrive</p>
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