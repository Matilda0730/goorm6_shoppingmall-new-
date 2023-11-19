import React, { useState, useEffect } from "react";

const Cart = () => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/carts/5")
			.then((res) => res.json())
			.then((json) => setCartItems(json.products))
			.catch((error) => console.error("Error:", error));
	}, []);

	return (
		<div>
			<h2>장바구니</h2>
			<ul>
				{cartItems.map((item) => (
					<li key={item.productId}>
						제품 ID: {item.productId}, 수량: {item.quantity}
						<button>+</button>
						<button>-</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Cart;
