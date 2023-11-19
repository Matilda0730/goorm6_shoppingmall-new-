import { current } from "@reduxjs/toolkit";
import { updateCurrentUser } from "firebase/auth";
import { ShoppingCart, SignIn, SignOut } from "phosphor-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
	const currentUser = useSelector((state) => state.auth.user);
	return (
		<nav className="nav-bar">
			<Link to="/">
				<h2>OnlineShop</h2>
			</Link>
			<div className="right-container">
				<Link to="/cart">
					<div className="nav-bag-container">
						<div className="nav-bag">
							<ShoppingCart size={32} />
							<span className="bag-quantity">
								<span>0</span>
							</span>
						</div>
					</div>
				</Link>

				{currentUser ? (
					<Link to="/logout">
						<div className="Login">
							<SignOut size={32} />{" "}
						</div>
					</Link>
				) : (
					<Link to="/login">
						<div className="Login">
							<SignIn size={32} />
						</div>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
