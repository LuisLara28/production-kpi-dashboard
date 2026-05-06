import { useEffect, useState } from "react";
import axios from "axios";

import ProductionForm from "./components/productionForm";
import ProductionTable from "./components/productionTable";

import KPICards from "./components/KPICards";

import "./index.css";

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
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-gray-800 mb-8">Production KPI Dashboard</h1>
				<KPICards records={records} />
				<ProductionForm
					formData={formData}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
			</div>
			<div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
				<ProductionTable records={records} />
			</div>
		</div>
	);
}

export default App;
