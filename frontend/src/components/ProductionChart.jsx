import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
function ProductionChart({ records }) {
	const chartData = records.map((record) => ({
		line: record.line,
		planned: record.plannedQty,
		actual: record.actualQty,
	}));

	return (
		<div>
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">Production Chart</h2>
			<div className="w-full h-100">
				<ResponsiveContainer>
					<BarChart data={chartData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="line" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar
							dataKey="planned"
							fill="#2563eb"
							name="Planned Qty"
						/>
						<Bar
							dataKey="actual"
							fill="#16a34a"
							name="Actual Qty"
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default ProductionChart;
