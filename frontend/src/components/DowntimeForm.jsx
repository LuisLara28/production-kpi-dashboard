function DowntimeForm({ downtimeFormData, handleDowntimeChange, handleDowntimeSubmit }) {
	return (
		<div>
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Downtime Record</h2>
			<form
				onSubmit={handleDowntimeSubmit}
				className="space-y-4"
			>
				<input
					type="date"
					name="date"
					value={downtimeFormData.date}
					onChange={handleDowntimeChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>

				<input
					type="text"
					name="shift"
					placeholder="Shift"
					value={downtimeFormData.shift}
					onChange={handleDowntimeChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>

				<input
					type="text"
					name="line"
					placeholder="Line"
					value={downtimeFormData.line}
					onChange={handleDowntimeChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>

				<input
					type="text"
					name="cause"
					placeholder="Downtime Cause"
					value={downtimeFormData.cause}
					onChange={handleDowntimeChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>

				<input
					type="number"
					name="minutes"
					placeholder="Minutes"
					value={downtimeFormData.minutes}
					onChange={handleDowntimeChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>

				<button
					type="submit"
					className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
				>
					Add Downtime
				</button>
			</form>
		</div>
	);
}

export default DowntimeForm;
