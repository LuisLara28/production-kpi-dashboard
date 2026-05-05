import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [message, setMessage] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/health")
			.then((res) => {
				setMessage(res.data.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<h1>Production KPI Dashboard</h1>
			<p>{message}</p>
		</div>
	);
}

export default App;
