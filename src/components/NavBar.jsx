import { current } from "@reduxjs/toolkit";
import { updateCurrentUser } from "firebase/auth";
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								fill="currentColor"
								className="bi bi-handbag-fill"
								viewBox="0 0 16 16"
							>
								<path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
							</svg>
							<span className="bag-quantity">
								<span>3</span>
							</span>
						</div>
					</div>
				</Link>

				{currentUser ? (
					<Link to="/logout">
						<div className="Login">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								fill="currentColor"
								className="bi bi-box-arrow-in-left"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
								/>
								<path
									fill-rule="evenodd"
									d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
								/>
							</svg>
						</div>
					</Link>
				) : (
					<Link to="/login">
						<div className="Login">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="35"
								height="35"
								fill="currentColor"
								className="bi bi-box-arrow-in-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
								/>
								<path
									fillRule="evenodd"
									d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
								/>
							</svg>
						</div>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
