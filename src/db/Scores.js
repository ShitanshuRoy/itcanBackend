import Mongoose from "mongoose";
import scoreSchema from "../schema/scores.schema";
import BaseModel from "./Base";

const Score = Mongoose.model("score", scoreSchema);
export async function createScore() {
  const score = new Score({ totalScore: "7" });
  const response = await score.save();
  console.log(response);
}

export default class ScoreModel extends BaseModel {
  constructor(connection) {
    super("score", connection);
    this.schema = scoreSchema;
    //this.model = this.connection.model(this.name, this.schema);
    console.log("this.connection", this.connection);
    // this.userModel = this.connection.model("user", userSchema);
  }
  async create(data) {
    try {
      const score = await this.model.create({ totalScore: "8" });
      if (!score) {
        throw ("Error", 404);
      }
      console.log(score);
      return score;
    } catch (error) {
      throw error;
    }
  }

  async list(data) {
    try {
      const score = await this.model.findOneAndUpdate({ data });
      console.log("here", score);
      return score;
    } catch (error) {
      return error;
    }
  }
}
