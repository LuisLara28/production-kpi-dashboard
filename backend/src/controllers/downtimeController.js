const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getDowntimeRecords = async (req, res) => {
	try {
		const records = await prisma.downtimeRecord.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		res.json(records);
	} catch (error) {
		console.error(error);

		res.status(500).json({
			error: "Failed to fecth downtime records",
		});
	}
};

const createDowntimeRecord = async (req, res) => {
	try {
		const { date, shift, line, cause, minutes } = req.body;

		if (minutes < 0) {
			return res.status(400).json({
				error: "Minutes must be greater than 0 ",
			});
		}

		const newRecord = await prisma.downtimeRecord.create({
			data: {
				date,
				shift,
				line,
				cause,
				minutes,
			},
		});

		res.status(201).json(newRecord);
	} catch (error) {
		console.error(error);

		res.status(500).json({
			error: "Failed to create downtime record",
		});
	}
};

module.exports = {
	getDowntimeRecords,
	createDowntimeRecord,
};
