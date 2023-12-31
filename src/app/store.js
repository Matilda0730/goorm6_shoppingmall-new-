import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import authReducer from "../features/authSlice";
import cartReducer from "../features/CartSlice";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		auth: authReducer,
		cart: cartReducer,
	},
});

export default store;
