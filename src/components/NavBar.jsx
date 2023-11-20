import { current } from "@reduxjs/toolkit";
import { updateCurrentUser } from "firebase/auth";
import { ShoppingCart, SignIn, SignOut } from "phosphor-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoading, setProducts } from "../features/productsSlice";
import SignUpModal from "./Modal/SignUpModal";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Modal.setAppElement("#root");

const NavBar = () => {
	const [signUpModalOn, setSignUpModalOn] = useState(false);
	const handleClick = (event) => {
		setSignUpModalOn(true);
	};
	const currentUser = useSelector((state) => state.auth.user);
	const dispatch = useDispatch();
	const fetchProducts = (category) => {
		dispatch(setLoading(true));
		let url = "https://fakestoreapi.com/products";
		if (category !== "all") {
			url += `/category/${category}`;
		}

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				dispatch(setProducts(data));
				dispatch(setLoading(false));
			})
			.catch((error) => {
				console.log(error);
				dispatch(setLoading(false));
			});
	};

	return (
		<>
			<SignUpModal show={signUpModalOn} onHide={setSignUpModalOn} />
			<nav className="nav-bar">
				<Link to="/">
					<h2 onClick={() => fetchProducts("all")}>OnlineShop</h2>
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
					<button onClick={() => handleClick()}>dd</button>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
