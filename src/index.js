const express = require("express");
const cors = require('cors')
const app = express();

const routes = require('./routes/routes');

app.use(cors())

const Loaders = require('./loaders');

Loaders.start();

app.use(express.json());
app.use(routes);


app.listen(3002, console.log("Servidor rodando na porta 3002"));