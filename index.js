const express = require("express");
require("colors");
require("dotenv").config({ path: "dev.env" });
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send({
		success: false,
		message: `Server running successfully on port ${PORT}`,
	});
});

app.listen(PORT, () => {
	console.log(`Server Running on port ${PORT}`.yellow);
});
