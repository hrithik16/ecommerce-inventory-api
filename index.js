require('dotenv').config(); //For Env variables
const express = require("express");
const db = require("./config/connect"); //To connect to DB
const port = 8000;

const app = express();

app.use(express.json());
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running server: ", err);
  }
  console.log(`Server is running on port localhost:${port}`);
});
