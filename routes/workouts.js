const express = require("express");
const router = express.Router();

const Workout = require("../models/workoutModel");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

//GET all workouts
router.get("/", getWorkouts);

//GET a single worket
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: `delete the workout` });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msgg: "UPDATAE a workout" });
});

module.exports = router;
