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
const mongooseDb = mongoose.connect(
  "mongodb://localhost:27017/haupflege",
  options
);

export default class BaseModel {
  constructor(name) {
    this.name = name;
    // console.log("mongooseDb", mongooseDb);
    console.log("connection", this.connection);
    // if (mongooseDb) {
    // if (!this.connection) this.connection = mongoose.connection;
    // }

    mongooseDb.then(val => {
      console.log(val);
      this.connection = val;
    });
  }
}
