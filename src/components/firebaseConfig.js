// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
	apiKey: "MY-API-KEY",
	authDomain: "authDomain",
	projectId: "projectId",
	storageBucket: "storageBucket",
	messagingSenderId: "messagingSenderId",
	appId: "appId",
	measurementId: "measurementId",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
