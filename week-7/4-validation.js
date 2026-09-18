const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("validation");
});

app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    if (!name || name.trim() === "") {
        return res.send("Error: Name is required.");
    }

    if (!email || email.trim() === "") {
        return res.send("Error: Email is required.");
    }

    res.send(
        "Registration successful!<br>" +
        "Name: " + name + "<br>" +
        "Email: " + email
    );
});

app.listen(3003, () => {
    console.log("Server running at http://localhost:3003");
});