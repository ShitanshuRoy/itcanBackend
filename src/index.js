import express from "express";
import createRouter from "./routes/router";
import cors from "cors";

import http from "http";
const app = express();
app.use(cors());
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true
};
import mongoose from "mongoose";
mongoose.set("useFindAndModify", false);
// import { configuration } from "../lib/config.js";

//Below will be dynamic based on the environment
// const mongooseDb = mongoose.connect(
//   configuration[process.env["NODE_ENV"]].mongoUrl,
//   options
// );
mongoose
  .connect("mongodb://localhost:27017/haupflege", options)
  .then(val => console.log("connected to Mongo"))
  .catch(err => console.log(err));

app.use(createRouter());
app.listen(8080, err => {
  console.log("listning");
});
