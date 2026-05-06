function ProductionForm({ formData, handleChange, handleSubmit }) {
	return (
		<div>
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Production Record</h2>
			<form
				onSubmit={handleSubmit}
				className="space-y-4"
			>
				<input
					type="date"
					name="date"
					value={formData.date}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>

				<input
					type="text"
					name="shift"
					placeholder="shift"
					value={formData.shift}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>
				<input
					type="text"
					name="line"
					placeholder="line"
					value={formData.line}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>
				<input
					type="text"
					name="product"
					placeholder="Product"
					value={formData.product}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>
				<input
					type="number"
					name="plannedQty"
					placeholder="Planned Qty"
					value={formData.plannedQty}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>
				<input
					type="number"
					name="actualQty"
					placeholder="actual Qty"
					value={formData.actualQty}
					onChange={handleChange}
					required
					className="w-full border border-gray-300 rounded-lg p-3"
				/>

				<button
					type="submit"
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
				>
					Add Record
				</button>
			</form>
		</div>
	);
}

export default ProductionForm;
