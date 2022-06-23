const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	let today = new Date();

	if (today.getDay() === 6 || today.getDay() === 0) {
		res.send("Yay it's the weekend!");
	} else {
		res.send("Boo! I have to work!");
	}
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
