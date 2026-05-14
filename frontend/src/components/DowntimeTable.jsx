function DowntimeTable({ downtimeRecords }) {
	return (
		<div>
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">Downtime Records</h2>

			<div className="overflow-x-auto">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-gray-200 text-gray-700">
							<th className="p-3 text-left">Date</th>
							<th className="p-3 text-left">Shift</th>
							<th className="p-3 text-left">Line</th>
							<th className="p-3 text-left">Cause</th>
							<th className="p-3 text-left">Minutes</th>
						</tr>
					</thead>

					<tbody>
						{downtimeRecords.map((record) => (
							<tr
								key={record.id}
								className="border-b border-gray-200 hover:bg-gray-50"
							>
								<td className="p-3">{record.date}</td>

								<td className="p-3">{record.shift}</td>

								<td className="p-3">{record.line}</td>

								<td className="p-3">{record.cause}</td>

								<td className="p-3 font-semibold text-red-600">{record.minutes} min</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default DowntimeTable;
