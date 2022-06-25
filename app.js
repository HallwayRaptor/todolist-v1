const express = require("express");
const date = require(__dirname + "/date.js");

const app = express();
const port = 3000;
const index = __dirname + "/index.html";
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
	const day = date.getDate();
	res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", (req, res) => {
	const item = req.body.newItem;

	if (req.body.list === "Work") {
		workItems.push(item);
		res.redirect("/work");
	} else {
		items.push(item);
		res.redirect("/");
	}
});

app.get("/work", (req, res) => {
	res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.post("/", (req, res) => {
	const item = req.body.newItem;
	workItems.push(item);
	res.redirect("/work");
});

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
