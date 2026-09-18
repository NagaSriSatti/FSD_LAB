const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));

app.get("/", (req, res) => {
    res.render("home", { user: req.session.user });
});

app.get("/create-cookie", (req, res) => {
    res.cookie("student", "NagaSri");
    res.send("Cookie created. <a href='/read-cookie'>Read Cookie</a>");
});

app.get("/read-cookie", (req, res) => {
    res.send(`Cookie: ${req.cookies.student || "Not found"}`);
});

app.get("/login", (req, res) => {
    res.render("login", { error: "" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        req.session.user = username;
        res.redirect("/dashboard");
    } else {
        res.render("login", { error: "Invalid credentials" });
    }
});

function auth(req, res, next) {
    req.session.user ? next() : res.redirect("/login");
}

app.get("/dashboard", auth, (req, res) => {
    res.render("dashboard", { user: req.session.user });
});

app.get("/logout", (req, res) => {
    req.session.destroy(() => res.redirect("/login"));
});

app.listen(3000, () => console.log("http://localhost:3000"));