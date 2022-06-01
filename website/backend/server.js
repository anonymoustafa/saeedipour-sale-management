const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
        res.render("home");
});

app.get("/home", (req, res) => {
        res.render("home");
});

app.get("/about", (req, res) => {
        res.render("about");
});

app.get("/login", (req, res) => {
        res.render("login");
});

app.use(express.static(__dirname+"./public"))

// custom 404 page
app.use((req, res) => {
        res.status(404);
        res.render("404");
});
// custom 500 page
app.use((err, req, res, next) => {
        console.error(err.message);
        res.status(500);
        res.render("500");
});

app.listen(3000);
