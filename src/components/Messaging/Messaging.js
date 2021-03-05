import React, { useEffect, useState } from "react";
import "./Messaging.css";
import avatar from "../../assets/images/avatars/dylan_bernadou.jpg";
import avatar2 from "../../assets/images/avatars/tony_stark.jpg";
import avatar3 from "../../assets/images/avatars/spider_dylan.png";
import * as eva from 'eva-icons';
import CreateChannel from "./CreateChannel";
import DAO from "../../DAO";
import moment from 'moment';

function Messaging(props) {
	const api = new DAO();
	const [channels, set_channels] = useState([]);
	const [current_channel, set_current_channel] = useState(null);
	const [messages, set_messages] = useState([]);
	const [input_message, set_input_message] = useState("");
	const [partner, set_partner] = useState({});

	useEffect(() => {
	    document.title = "Messagerie - TeamPark";
	    eva.replace();
	    getChannels();
	    /*const url = new URL('http://localhost:3001/.well-known/mercure');
		url.searchParams.append('topic', 'https://localhost:8000/api/messages/{id}');
		const eventSource = new EventSource(url);

		eventSource.onmessage = event => {
		    console.log(JSON.parse(event.data));
		}*/
	}, []);

	const handleOnChange = (e) => {
	    eval("set_" + [e.target.name] + '("' + e.target.value + '");');
	};

	const changeChannel = (id) => {
		let curr_chann = channels.find(e => e.id === id);
		set_current_channel(curr_chann);
		getMessagesForCurrentChannel(id);
		getInfoOnConversationPartner(curr_chann);
	}

	const getChannels = () => {
		api.getChannels().then((response) => {
			let list_of_channels = response.filter(channel => channel.users.includes("/api/users/" + props.user.id));
			set_channels(list_of_channels.reverse());
			if (list_of_channels.length === 0){
				set_current_channel(null);
				return;
			}
			set_current_channel(list_of_channels[0]);
			getMessagesForCurrentChannel(list_of_channels[0].id);
			getInfoOnConversationPartner(list_of_channels[0]);
	    })
	}
	
	const getMessagesForCurrentChannel = (id = null) => {
		let channel_id = id ? id : current_channel.id;
		api.getMessagesByChannel(channel_id).then((response) => {
			set_messages(response);
		})
	}

	const getInfoOnConversationPartner = (chann) => {
		let partner_id = chann.users?.filter(user => user.split('/')[3] != props.user.id)[0].split('/')[3];

		api.getUser(partner_id).then((response) => {
			set_partner(response);
		})
	}

	const sendMessage = async(e) => {
		e.preventDefault();

		let data = {
			content: input_message,
			user: "/api/users/" + props.user.id,
			channel: "/api/channels/" + current_channel.id
		}

		api.postMessage(data).then((response) => {
			set_input_message("");
			getMessagesForCurrentChannel();
		})
	}

	const deleteChannel = async () => {
		await api.deleteChannel(current_channel.id).then((response) => {
			getChannels();
		})
	}

	return (
		<div className="messaging offset-2 col-10 pl-5 d-flex">
			<div className="col-1 contacts">
				<h4>Channels</h4>
				{
					channels.map((channel) => {
						return (
							<button onClick={() => changeChannel(channel.id)} className="avatarContainer active-contact">{channel.name}</button>
						)
					})
				}
				
				<CreateChannel user={props.user} update={getChannels} channels={channels} />
				<button data-toggle="modal" data-target={"#createChannel"} type="button" data-dismiss="modal" className="addChannelButton">+</button>
			</div>
		{
			current_channel ?
			<div className="chat col-11">
				<div className=" pl-5 row">
					<h2>{current_channel.name} avec {partner.firstname} {partner.lastname} </h2>
					<button onClick={deleteChannel} className="ml-5 sendMessageButton">Supprimer la conversation</button>
				</div>
				<div className="messages">
					{
						messages.map((message) => {
							return (
								<div className={ message.user.split('/')[3] === props.user.id ? "rowLeft rowChat" : "rowChat rowRight" }>
									<div className="avatarContainer">
										<img title={moment(message.datetime).format('DD MMM, YYYY à HH:mm') } src={avatar} alt="user avatar" className="avatar" />
									</div>
									<p>{message.content}</p>
								</div>
							)
						})
					}

				</div>
				<div className="message_send">
					<form>
						<input value={input_message} onChange={handleOnChange} name="input_message" placeholder="Aa" />
						<button onClick={sendMessage} type="submit" className="sendMessageButton">
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
			: ''

		}
		</div>
	);
}

export default Messaging;