const express = require("express");
const mongoose = require("mongoose");
const { USER, PASSWORD } = require("../constants");

const app = express();

mongoose.connect(
  `mongodb://${USER}:${PASSWORD}@ds129045.mlab.com:29045/twitter-clone-backend`,
  {
    useNewUrlParser: true
  }
);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
