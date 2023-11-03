const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");
//GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

//GET a single worket
router.get("/:id", (req, res) => {
  res.json({ mssg: `GET a single workout` });
});

//POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  //   res.json({ mssg: "POST a new workout" });
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: `delete the workout` });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msgg: "UPDATAE a workout" });
});

module.exports = router;
