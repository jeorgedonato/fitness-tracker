const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: String,
    required: true,
    default: moment().format("YYYY-MM-DD HH:mm")
  },
  totalDuration: {
    type: Number,
    default: 0
  },
  exercises: []
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;