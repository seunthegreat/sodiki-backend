const mongoose = require("mongoose");
const {uri, connectionParams} = require("./constants")

const connection = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connection;