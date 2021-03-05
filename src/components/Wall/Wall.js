import React, { useEffect, useState } from "react";
import "./Wall.css";
import CreatePostIt from "./CreatePostIt";
import "bootstrap";
import $ from "jquery";
import DAO from "../../DAO";
import PostIt from "./PostIt";

function Wall(props) {
	const api = new DAO();
	const [postIts, set_postIts] = useState([]);

	useEffect(() => {
	    document.title = "Mur - TeamPark";
	    getPostits();
	}, []);

	const getPostits = async() => {
		let postItsArray = [];
		await api.getPostIts().then((postits) => {
			postits.map(postit => {
				if (postit.school?.split("/")[3] === props.user.school.split("/")[3])
					postItsArray.push(postit);
				if (postit.promotion?.split("/")[3] === props.user.promotion.split("/")[3])
					postItsArray.push(postit);
			})
		})
		set_postIts(postItsArray);
	}

	return (
		<div className="wall offset-2 col-10 pl-5">
			<div className="postItsContainer d-flex">
				{
					postIts.map(postit => {
						return(
						<PostIt postit={postit} />
					)})
				}
			</div>
			<CreatePostIt user={props.user} update={getPostits} />
			<div className="d-flex justify-content-center">
				<button data-toggle="modal" data-target={"#createPostIt"} type="button" data-dismiss="modal" className="addPostItButton">+</button>
			</div>
		</div>
	);
}

export default Wall;