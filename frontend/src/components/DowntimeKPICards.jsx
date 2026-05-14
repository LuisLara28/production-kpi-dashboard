function DowntimeKPICards({ downtimeRecords }) {
	const totalDowntime = downtimeRecords.reduce((sum, record) => sum + record.minutes, 0);

	const totalEvents = downtimeRecords.length;

	const averageDowntime = totalEvents > 0 ? (totalDowntime / totalEvents).toFixed(1) : 0;

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			<div className="bg-white rounded-xl shadow-md p-6">
				<h3 className="text-gray-500 text-sm mb-2">Total Downtime</h3>

				<p className="text-3xl font-bold text-red-600">{totalDowntime} min</p>
			</div>

			<div className="bg-white rounded-xl shadow-md p-6">
				<h3 className="text-gray-500 text-sm mb-2">Downtime Events</h3>

				<p className="text-3xl font-bold text-gray-800">{totalEvents}</p>
			</div>

			<div className="bg-white rounded-xl shadow-md p-6">
				<h3 className="text-gray-500 text-sm mb-2">Average Downtime</h3>

				<p className="text-3xl font-bold text-orange-500">{averageDowntime} min</p>
			</div>
		</div>
	);
}

export default DowntimeKPICards;
