import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function DowntimeChart({ downtimeRecords }) {
	const chartData = downtimeRecords.map((record) => ({
		cause: record.cause,
		minutes: record.minutes,
	}));

	return (
		<div>
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">Downtime by Cause</h2>

			<div className="w-full h-100">
				<ResponsiveContainer>
					<BarChart data={chartData}>
						<CartesianGrid strokeDasharray="3 3" />

						<XAxis dataKey="cause" />

						<YAxis />

						<Tooltip />

						<Bar
							dataKey="minutes"
							fill="#dc2626"
							name="Minutes"
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default DowntimeChart;
