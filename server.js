const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/api.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttrackerdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true ,
});

const db = mongoose.connection
db.on('error', error=> console.error(error))
db.once('open',() => console.log("connected to mongoose "))

app.listen(3000, () => {
    console.log(`App running on port ${PORT}!`);
  });