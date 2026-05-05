const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

let productionRecords = [
	{
		id: 1,
		date: "2026-05-04",
		shift: "A",
		line: "BL1",
		product: "Part A",
		plannedQty: 1000,
		actualQty: 920,
	},
	{
		id: 2,
		date: "2026-05-04",
		shift: "B",
		line: "BL2",
		product: "Part B",
		plannedQty: 850,
		actualQty: 790,
	},
];

app.get("/api/health", (req, res) => {
	res.json({
		message: "Backend running correctly",
	});
});

const PORT = process.env.PORT || 3000;

app.get("/api/production-records", (req, res) => {
	res.json(productionRecords);
});

app.post("/api/production-records", (req, res) => {
	const { date, shift, line, product, plannedQty, actualQty } = productionRecords;

	const newRecord = {
		id: productionRecords.length + 1,
		date,
		shift,
		line,
		product,
		plannedQty,
		actualQty,
	};

	productionRecords.push(newRecord);

	res.status(201).json(newRecord);
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
