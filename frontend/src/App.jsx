import { useEffect, useState } from "react";
import axios from "axios";

import ProductionForm from "./components/productionForm";
import ProductionTable from "./components/productionTable";

import KPICards from "./components/KPICards";

import ProductionChart from "./components/ProductionChart";

import ProductionFilters from "./components/ProductionFilters";

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
	const [filters, setFilters] = useState({
		line: "",
		shift: "",
	});
	const [editingRecord, setEditingRecord] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchRecords = async () => {
			try {
				setIsLoading(true);
				setError("");

				const response = await axios.get("http://localhost:3000/api/production-records", {
					params: filters,
				});

				setRecords(response.data);
			} catch (error) {
				console.error("Error fetching production records:", error);
				setError("Failed to load production records");
			} finally {
				setIsLoading(false);
			}
		};

		fetchRecords();
	}, [filters]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFilterChange = (e) => {
		setFilters({
			...filters,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.plannedQty <= 0) {
			alert("Planned quantity must be greater than 0");
			return;
		}

		if (formData.actualQty < 0) {
			alert("Actual quantity cannot be negative");
			return;
		}

		try {
			const payload = {
				...formData,
				plannedQty: Number(formData.plannedQty),
				actualQty: Number(formData.actualQty),
			};

			if (editingRecord) {
				const response = await axios.put(`http://localhost:3000/api/production-records/${editingRecord.id}`, payload);

				setRecords(records.map((record) => (record.id === editingRecord.id ? response.data : record)));

				setEditingRecord(null);
			} else {
				const response = await axios.post("http://localhost:3000/api/production-records", payload);

				setRecords([...records, response.data]);
			}

			setFormData({
				date: "",
				shift: "",
				line: "",
				product: "",
				plannedQty: "",
				actualQty: "",
			});
		} catch (error) {
			console.error("Error saving production record:", error);
		}
	};

	const handleDelete = async (id) => {
		const confirmed = window.confirm("Are you sure you want to delete this production record?");

		if (!confirmed) {
			return;
		}
		try {
			await axios.delete(`http://localhost:3000/api/production-records/${id}`);

			setRecords(records.filter((record) => record.id !== id));
		} catch (error) {
			console.error("Error deleting production record:", error);
		}
	};

	const handleEdit = (record) => {
		setEditingRecord(record);

		setFormData({
			date: record.date,
			shift: record.shift,
			line: record.line,
			product: record.product,
			plannedQty: record.plannedQty,
			actualQty: record.actualQty,
		});
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-4xl font-bold text-gray-800 mb-8">Production KPI Dashboard</h1>
				<KPICards records={records} />
				<ProductionFilters
					filters={filters}
					handleFilterChange={handleFilterChange}
				/>
				<div className="bg-white rounded-xl shadow-md p-6 mb-8">
					<ProductionChart records={records} />
				</div>
				<ProductionForm
					formData={formData}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
			</div>
			<div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
				{isLoading && <p className="text-gray-500 mb-4">Loading production records...</p>}

				{error && <p className="text-red-600 font-semibold mb-4">{error}</p>}

				<ProductionTable
					records={records}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
				/>
			</div>
		</div>
	);
}

export default App;
