const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getProductionRecords = async (req, res) => {
	const { line, shift } = req.query;

	const filters = {};

	if (line) {
		filters.line = line;
	}

	if (shift) {
		filters.shift = shift;
	}
	try {
		const records = await prisma.productionRecord.findMany({
			where: filters,
			orderBy: {
				createdAt: "desc",
			},
		});
		res.json(records);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch production records" });
	}
};

const createProductionRecord = async (req, res) => {
	const { date, shift, line, product, plannedQty, actualQty } = req.body;
	if (plannedQty <= 0) {
		return res.status(400).json({
			error: "Planned quantity must be greater than 0",
		});
	}

	if (actualQty < 0) {
		return res.status(400).json({
			error: "Actual quantity cannot be negative",
		});
	}

	try {
		const newRecord = await prisma.productionRecord.create({
			data: {
				date,
				shift,
				line,
				product,
				plannedQty,
				actualQty,
			},
		});
		return res.status(201).json(newRecord);
	} catch (error) {
		console.error(error);

		res.status(500).json({ error: "Failed to create production record" });
	}
};

const deleteProductionRecord = async (req, res) => {
	const { id } = req.params;

	try {
		await prisma.productionRecord.delete({
			where: {
				id: Number(id),
			},
		});

		res.json({
			message: "Production record deleted successfully",
		});
	} catch (error) {
		console.error(error);

		res.status(500).json({
			error: "Failed to delete production record",
		});
	}
};

const updateProductionRecord = async (req, res) => {
	try {
		const { id } = req.params;
		const { date, shift, line, product, plannedQty, actualQty } = req.body;

		if (plannedQty <= 0) {
			return res.status(400).json({
				error: "Planned quantity must be greater than 0",
			});
		}

		if (actualQty < 0) {
			return res.status(400).json({
				error: "Actual quantity cannot be negative",
			});
		}

		const updateRecord = await prisma.productionRecord.update({
			where: {
				id: Number(id),
			},
			data: {
				date,
				shift,
				line,
				product,
				plannedQty,
				actualQty,
			},
		});

		res.json(updateRecord);
	} catch (error) {
		console.error(error);

		res.status(500).json({
			error: "Failed to update production record",
		});
	}
};

module.exports = {
	getProductionRecords,
	createProductionRecord,
	deleteProductionRecord,
	updateProductionRecord,
};
