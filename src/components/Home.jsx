import React, { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setLoading } from "../features/productsSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../features/CartSlice";

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.items);
	const loading = useSelector((state) => state.products.loading);
	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};
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
	useEffect(() => {
		dispatch(setLoading(true));
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				dispatch(setProducts(data));
				dispatch(setLoading(false));
			})
			.catch((error) => {
				console.error("Error:", error);
				dispatch(setLoading(false));
			});
	}, [dispatch]);

	return (
		<div>
			<div className="button-container">
				<button className="button-28" onClick={() => fetchProducts("all")}>
					모두
				</button>
				<button className="button-28" onClick={() => fetchProducts("electronics")}>
					전자기기
				</button>
				<button className="button-28" onClick={() => fetchProducts("jewelery")}>
					쥬얼리
				</button>
				<button className="button-28" onClick={() => fetchProducts("men's clothing")}>
					남성의류
				</button>
				<button className="button-28" onClick={() => fetchProducts("women's clothing")}>
					여성의류
				</button>
			</div>

			<div className="products-container">
				{products.map((product) => (
					<div key={product.id} className="item-card">
						<Link to={`/product-details/${product.id}`} className="product-link">
							<img src={product.image} alt={product.title} />
							<div className="item-card-description">
								<h6>{product.title}</h6>
								<h5>{`${product.price}$`}</h5>
							</div>
						</Link>
						<button className="addToCartBtn" onClick={() => handleAddToCart(product)}>
							장바구니에 담기
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
