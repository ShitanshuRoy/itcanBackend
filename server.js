const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/childsPlay")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => console.log("Could not connect to DB", err));

module.exports = mongoose;
