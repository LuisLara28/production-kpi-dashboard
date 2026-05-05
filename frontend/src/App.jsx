import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [records, setRecords] = useState([]);

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

	return (
		<div>
			<h1>Production KPI Dashboard</h1>

			<h2>Production Records</h2>

			<table
				border="1"
				cellPadding="8"
			>
				<thead>
					<tr>
						<th>Date</th>
						<th>Shift</th>
						<th>Line</th>
						<th>Product</th>
						<th>Planned Qty</th>
						<th>Actual Qty</th>
						<th>Compliance %</th>
					</tr>
				</thead>

				<tbody>
					{records.map((record) => {
						const compliance = ((record.actualQty / record.plannedQty) * 100).toFixed(1);

						return (
							<tr key={record.id}>
								<td>{record.date}</td>
								<td>{record.shift}</td>
								<td>{record.line}</td>
								<td>{record.product}</td>
								<td>{record.plannedQty}</td>
								<td>{record.actualQty}</td>
								<td>{compliance}%</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
