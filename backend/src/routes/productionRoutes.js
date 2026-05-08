const express = require("express");

const {
	getProductionRecords,
	createProductionRecord,
	deleteProductionRecord,
	updateProductionRecord,
} = require("../controllers/productionController");

const router = express.Router();

router.get("/", getProductionRecords);

router.post("/", createProductionRecord);

router.delete("/:id", deleteProductionRecord);

router.put("/:id", updateProductionRecord);

module.exports = router;
