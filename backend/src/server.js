const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productionRoutes = require("./routes/productionRoutes");
const downtimeRoutes = require("./routes/downtimeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/production-records", productionRoutes);
app.use("/api/downtime-records", downtimeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
