import React, { useEffect, useState } from "react";
import { useProductView } from "./useProductView";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/CartSlice";

const ShowDetailData = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const handleAddToCart = (product) => {
		const productToAdd = {
			...product,
			cartQuantity: parseInt(quantity),
		};
		dispatch(addToCart(productToAdd));
	};
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
			})
			.catch((error) => {
				console.error("Error fetching data: ", error);
			});
	}, []);

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h2>{product.title}</h2>
			<img src={product.image} alt={product.title} />
			<p>{product.description}</p>
			<p>Price: ${product.price}</p>
			<div>
				<label>Quantity: </label>
				<input
					type="number"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
					min="1"
				/>
			</div>
			<button onClick={() => handleAddToCart(product)}>장바구니에 추가</button>
			<button>바로 구매하기</button>
		</div>
	);
};

export default ShowDetailData;
