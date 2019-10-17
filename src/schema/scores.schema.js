const mongoose = require("mongoose");
const { Model, Schema } = mongoose;

const scoreSchema = new Schema({
  totalScore: String,
  type: { type: String, enum: ["addition", "subtraction"] },
  scores: [
    { count1: String, count2: String, answer: String, userAnswer: String }
  ],
  date: { type: Date, defaut: Date.now }
});

export default scoreSchema;
