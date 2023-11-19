import React, { useEffect, useState } from "react";
import { useProductView } from "./useProductView";
import { useParams } from "react-router";

const ShowDetailData = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

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
		</div>
	);
};

export default ShowDetailData;
