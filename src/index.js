const express = require("express");
const cors = require('cors')
const app = express();
// const connection = require("./dbConfig/dbConfig");

const routes = require('./routes/routes');

app.use(cors())
const port = process.env.PORT || 3001;

const Loaders = require('./loaders');

Loaders.start();

app.use(express.json());
app.use(routes);
// connection();

app.listen(3002, console.log("Servidor rodando na porta 3002"));