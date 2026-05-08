function ProductionTable({ records, handleDelete, handleEdit }) {
	return (
		<div>
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">Production Records</h2>
			<div className="overflow-x-auto">
				<table
					border="1"
					cellPadding="8"
					className="w-full border-collapse"
				>
					<thead>
						<tr className="bg-gray-200 text-gray-700">
							<th className="p-3 text-left">Date</th>
							<th className="p-3 text-left">Shift</th>
							<th className="p-3 text-left">Line</th>
							<th className="p-3 text-left">Product</th>
							<th className="p-3 text-left">Planned Qty</th>
							<th className="p-3 text-left">Actual Qty</th>
							<th className="p-3 text-left">Compliance %</th>
							<th className="p-3 text-left">Actions</th>
						</tr>
					</thead>

					<tbody>
						{records.map((record) => {
							const compliance = ((record.actualQty / record.plannedQty) * 100).toFixed(1);

							return (
								<tr
									key={record.id}
									className="border-b border-gray-200 hover:bg-gray-50"
								>
									<td className="p-3">{record.date}</td>
									<td className="p-3">{record.shift}</td>
									<td className="p-3">{record.line}</td>
									<td className="p-3">{record.product}</td>
									<td className="p-3">{record.plannedQty}</td>
									<td className="p-3">{record.actualQty}</td>
									<td className={`p-3 font-semibold ${compliance >= 90 ? "text-green-600" : "text-red-600"}`}>
										{compliance}%
									</td>
									<td className="p-3">
										<button
											onClick={() => handleEdit(record)}
											className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm transition mr-2"
										>
											Edit
										</button>
										<button
											onClick={() => handleDelete(record.id)}
											className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm transition"
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ProductionTable;
