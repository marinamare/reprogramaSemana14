const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/livraria", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function (){
  console.log("conexão com banco de dados feita com sucesso! :)");
});


//rotas
// const equipe = require("./routes/equipeRoutes");
const livros = require("./routes/livrosRoutes");


app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use("/equipe", equipe);
app.use("/livros", livros);

module.exports = app;
