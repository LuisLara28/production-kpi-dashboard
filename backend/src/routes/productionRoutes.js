const express = require("express");

const {
	getProductionRecords,
	createProductionRecord,
	deleteProductionRecord,
} = require("../controllers/productionController");

const router = express.Router();

router.get("/", getProductionRecords);

router.post("/", createProductionRecord);

router.delete("/:id", deleteProductionRecord);

module.exports = router;
