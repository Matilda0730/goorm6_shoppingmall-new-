import React, { createContext, useState } from "react";

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < 10 + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopcontextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());
	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const contextValue = { cartItems, addToCart, removeFromCart };

	return <Shopcontext.Provider value={contextValue}>{props.children}</Shopcontext.Provider>;
};

export default Shopcontext;
