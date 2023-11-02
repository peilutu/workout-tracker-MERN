const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//schema define the structure of a particular document inside of db and apply schema to model, and we use model to interact with a collection of that name.

module.exports = mongoose.model("Workout", workoutSchema);
