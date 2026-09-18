const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/submit", (req, res) => {

    const name = req.body.name;

    res.send("Hello " + name + "!");
});

app.listen(3002, () => {
    console.log("Server running at http://localhost:3002");
});