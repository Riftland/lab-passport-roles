const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  startingDate: Date,
  endDate: Date,
  level: String,
  available: Boolean,
});

const Course = mongoose.model("Course", userSchema);
module.exports = Course;
