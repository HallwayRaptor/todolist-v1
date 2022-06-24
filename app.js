const express = require("express");

const app = express();
const port = 3000;
const index = __dirname + "/index.html";

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	const currentDay = today.getDay();
	const today = new Date();

	if (currentDay === 6 || today.getDay() === 0) {
		res.write("Yay it's the weekend!");
	} else {
		res.send(index);
	}
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
