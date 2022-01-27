//Importing npm modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


//Connecting to db
require("./dbConnection/connect")

const app = express();
const routes = require("./routes/routes")

app.use(express.json())
app.use(cors())

app.use('/', routes)

const PORT = 5000;

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})