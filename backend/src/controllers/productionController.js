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

module.exports = {
	getProductionRecords,
	createProductionRecord,
};
