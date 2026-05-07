const express = require("express");

const { getProductionRecords, createProductionRecord } = require("../controllers/productionController");

const router = express.Router();

router.get("/", getProductionRecords);

router.post("/", createProductionRecord);

module.exports = router;
