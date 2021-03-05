import React, { useEffect, useState } from "react";
import DAO from "../../DAO";
import "./Wall.css";
import PopUpPostIt from "./PopUpPostIt";
import "bootstrap";
import $ from "jquery";

function PostIt(props) {
	const api = new DAO();
	const [author, set_author] = useState({});
	const [colorCard, set_colorCard] = useState({});

	useEffect(() => {
	    getAuthorInformation();
	    getColorCard();
	}, []);

	const getAuthorInformation = async() => {
		await api.getUser(props.postit.user.split("/")[3]).then((response) => {
			set_author(response);
		})
	}

	const getColorCard = () => {
		let randomInt = Math.floor(Math.random() * Math.floor(7));
		if (randomInt === 0){
			set_colorCard(
			{
				'backgroundColor': '#7FC4BC',
				'transform': 'rotate(5deg)'
			});
		} else if (randomInt === 1) {
			set_colorCard(
			{
				'backgroundColor': '#F4A261',
				'color': 'white',
				'transform': 'rotate(10deg)'
			});
		} else if (randomInt === 2){
			set_colorCard(
			{
				'backgroundColor': '#E76F51',
				'transform': 'rotate(-5deg)'
			});
		} else if (randomInt === 3) {
			set_colorCard(
			{
				'backgroundColor': '#E9C46A',
				'transform': 'rotate(-10deg)'
			});
		} else if (randomInt === 4) {
			set_colorCard(
			{
				'backgroundColor': '#7EC264',
				'transform': 'rotate(15deg)'
			});
		} else if (randomInt === 5) {
			set_colorCard(
			{
				'backgroundColor': '#2A9D8F',
				'transform': 'rotate(-15deg)'
			});
		} else if (randomInt === 6) {
			set_colorCard(
			{
				'backgroundColor': '#D44E55',
				'transform': 'rotate(0deg)'
			});
		} 
	}

	return (
		<div className="post-it" style={colorCard} >
			<h3>{author.firstname} {author.lastname}</h3>
			<h5>{props.postit.category}</h5>
			<p>{props.postit.message}</p>
		</div>
	);
}

export default PostIt