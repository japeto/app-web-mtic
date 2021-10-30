const express = require("express");
const app = express();

const personsRoutes = require("./routes/persons");
const moviesRoutes = require("./routes/movies");
const studiosRoutes = require("./routes/studios");

app.use("/persons", personsRoutes);
app.use("/studios", moviesRoutes);
app.use("/movies", moviesRoutes);

const server = app.listen(3000, ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log("app-web-003 listening at http://", host, port)
});