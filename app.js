const express = require("express");

const app = express();
const port = 3000;
const index = __dirname + "/index.html";

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	const today = new Date();
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
	};

	var day = today.toLocaleDateString("en-US", options);

	res.render("list", { kindOfDay: day });
});

app.post("/", (req, res) => {
	const item = req.body.newItem;
	console.log(item);
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
