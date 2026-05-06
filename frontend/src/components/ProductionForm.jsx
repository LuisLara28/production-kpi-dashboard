function ProductionForm({ formData, handleChange, handleSubmit }) {
	return (
		<div>
			<h1>Production KPI Dashboard</h1>

			<h2>Add Production Records</h2>

			<form onSubmit={handleSubmit}>
				<input
					type="date"
					name="date"
					value={formData.date}
					onChange={handleChange}
					required
				/>

				<input
					type="text"
					name="shift"
					placeholder="shift"
					value={formData.shift}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="line"
					placeholder="line"
					value={formData.line}
					onChange={handleChange}
					required
				/>
				<input
					type="text"
					name="product"
					placeholder="Product"
					value={formData.product}
					onChange={handleChange}
					required
				/>
				<input
					type="number"
					name="plannedQty"
					placeholder="Planned Qty"
					value={formData.plannedQty}
					onChange={handleChange}
					required
				/>
				<input
					type="number"
					name="actualQty"
					placeholder="actual Qty"
					value={formData.actualQty}
					onChange={handleChange}
					required
				/>

				<button type="submit">Add Record</button>
			</form>
		</div>
	);
}

export default ProductionForm;
