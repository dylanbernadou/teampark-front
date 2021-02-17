import React from "react";
import "./Header.css";
import illustration from "../../assets/images/avatars/dylan_bernadou.jpg";

function Header() {
	return (
		<header className="offset-2 pl-5 col-10 d-flex justify-content-between align-items-center">
			<h1>Mon mur</h1>
			<div className="d-flex align-items-center">
				<p className="m-0">Dylan Bernadou</p>
				<div className="avatarContainer ml-3">
					<img src={illustration} alt="Test" />
				</div>
			</div>
		</header>
	);
}

export default Header;