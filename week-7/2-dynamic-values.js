const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {

    const student = {
        name: "Naga Sri",
        course: "CSE",
        year: 3
    };

    res.render("profile", student);
});

app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
});