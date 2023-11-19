import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetail = () => {
	const [authuser, setAuthUser] = useState(null);
	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser(user);
			} else {
				setAuthUser(null);
			}
		});

		return () => {
			listen();
		};
	}, []);

	const usersignOut = () => {
		signOut(auth)
			.then(() => {
				console.log("sign out successful");
			})
			.catch((error) => console.log(error));
	};
	return (
		<div>
			{authuser ? (
				<>
					<p>{`Signed In as ${authuser.email}`}</p>
					<button onClick={usersignOut}>Sign out</button>
				</>
			) : (
				<p> Signed out</p>
			)}
		</div>
	);
};

export default AuthDetail;
