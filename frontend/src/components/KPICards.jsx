function KPICards({ records }) {
	const totalPlanned = records.reduce((sum, record) => sum + record.plannedQty, 0);
	const totalActual = records.reduce((sum, record) => sum + record.actualQty, 0);

	const overallCompliance = totalPlanned > 0 ? ((totalActual / totalPlanned) * 100).toFixed(1) : 0;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
			<div className="bg-white rounded-xl shadow-md p-6">
				<h3 className="text-gray-500 text-sm mb-2">Total Planned</h3>
				<p className="text-3xl font-bold text-gray-800">{totalPlanned}</p>
			</div>
			<div className="bg-white rounded-xl shadow-md p-6">
				<h3 className="text-gray-500 text-sm mb-2">Total Actual</h3>
				<p className="text-3xl font-bold text-gray-800">{totalActual}</p>
			</div>

			<div className="bg-white rounded-xl shadow-md p-6">
				<h3 className="text-gray-500 text-sm mb-2">Overall Compliance</h3>
				<p className={`text-3xl font-bold ${overallCompliance >= 90 ? "text-green-600" : "text-red-600"}`}>
					{overallCompliance}%
				</p>
			</div>

			<div className="bg-white rounded-xl shadow-md p-6">
				<h3 className="text-gray-500 text-sm mb-2">Total Records</h3>
				<p className="text-3xl font-bold text-gray-800">{records.length}</p>
			</div>
		</div>
	);
}

export default KPICards;
