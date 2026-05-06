import { useEffect, useState } from "react";
import axios from "axios";

import ProductionForm from "./components/productionForm";
import ProductionTable from "./components/productionTable";

function App() {
	const [records, setRecords] = useState([]);
	const [formData, setFormData] = useState({
		date: "",
		shift: "",
		line: "",
		product: "",
		plannedQty: "",
		actualQty: "",
	});

	useEffect(() => {
		axios
			.get("http://localhost:3000/api/production-records")
			.then((res) => {
				setRecords(res.data);
			})
			.catch((err) => {
				console.error("Error fetching production records:", err);
			});
	}, []);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post("http://localhost:3000/api/production-records", {
				...formData,
				plannedQty: Number(formData.plannedQty),
				actualQty: Number(formData.actualQty),
			});

			setRecords([...records, response.data]);

			setFormData({
				date: "",
				shift: "",
				line: "",
				product: "",
				plannedQty: "",
				actualQty: "",
			});
		} catch (error) {
			console.error("Error creating record:", error);
		}
	};

	return (
		<div>
			<ProductionForm
				formData={formData}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			<ProductionTable records={records} />
		</div>
	);
}

export default App;
