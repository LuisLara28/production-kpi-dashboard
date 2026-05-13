const express = require("express");

const { getDowntimeRecords, createDowntimeRecord } = require("../controllers/downtimeController");

const router = express.Router();

router.get("/", getDowntimeRecords);

router.post("/", createDowntimeRecord);

module.exports = router;
