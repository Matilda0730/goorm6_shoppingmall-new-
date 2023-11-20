import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import AuthDetail from "./components/AuthDetail";
import ShowDetailData from "./components/ProductView/ShowDetailData";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ToastContainer />
				<NavBar />
				<Routes>
					<Route path="/cart" element={<Cart />} />
					<Route path="/not-found" element={<NotFound />} />
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/logout" element={<Logout />} />
					<Route path="*" element={<Navigate to="/not-found" replace />} />
					<Route path="/sign-up" element={<Signup />} />
					<Route path="/product-details/:id" element={<ShowDetailData />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
