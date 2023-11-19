import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsSlice from "../../features/productsSlice";

export const useProductView = () => {
	const { id: productId } = useParams();
	const [product, setProduct] = useState({});
	const [selectedColor, setSelectedColor] = useState("");
	const [selectedSize, setSelectedSize] = useState("");
	const [selectedQuantity, setSelectedQuantity] = useState(1);

	const handleQuantityChange = ({ target: { value } }) => {
		setSelectedQuantity(value);
	};

	const getImage = () => {
		return product.image || "";
	};

	useEffect(() => {
		if (product && product.attributes) {
			const { attributes } = product;
			setSelectedColor(attributes.colours[0]);
			setSelectedSize(attributes.colours[0]);
		}
	}, [product, setSelectedColor, setSelectedSize]);

	useEffect(() => {
		if (productId) {
			fetch(`https://fakestoreapi.com/products/${productId}`)
				.then((res) => res.json())
				.then((data) => {
					setProduct(data);
					if (data && data.attributes) {
						const { attributes } = data;
						setSelectedColor(attributes.colours[0].name);
						setSelectedSize(attributes.colours[0].name);
					}
				})
				.catch((error) => {
					console.log({ error });
				});
		}
	}, [productId]);

	return {
		product,
		getImage,
		selectedSize,
		selectedColor,
		selectedQuantity,
		setSelectedSize,
		handleQuantityChange,
		setSelectedColor,
	};
};

export default useProductView;
