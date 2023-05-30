const express = require("express");

const app = express();

app.use(express.static('public')); // Make everything inside of public/ available



// app.get(path, code);
// app.get(path, (req, res, next) => {});


// GET /
app.get("/", (req, res, next) => {
    console.log("we have received a request for the HOMEPAGE");

    res.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (req, res, next) => {
    console.log("we have received a request for the HOMEPAGE");

    res.sendFile(__dirname + "/views/about.html");
});
app.get("/works", (req, res, next) => {
    console.log("we have received a request for the HOMEPAGE");

    res.sendFile(__dirname + "/views/works.html");
});

app.listen(5000, () => { console.log("Listening on http://localhost:5000/ ...")});