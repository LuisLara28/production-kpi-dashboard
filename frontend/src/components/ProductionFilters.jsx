function ProductionFilters({ filters, handleFilterChange }) {
	return (
		<div className="bg-white rounded-xl shadow-md p-6 mb-8">
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">Filters</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<select
					name="line"
					value={filters.line}
					onChange={handleFilterChange}
					className="border border-gray-300 rounded-lg p-3"
				>
					<option value="">All Lines</option>

					<option value="BL1">BL1</option>

					<option value="BL2">BL2</option>
				</select>

				<select
					name="shift"
					value={filters.shift}
					onChange={handleFilterChange}
					className="border border-gray-300 rounded-lg p-3"
				>
					<option value="">All Shifts</option>

					<option value="A">Shift A</option>

					<option value="B">Shift B</option>
				</select>
			</div>
		</div>
	);
}

export default ProductionFilters;
