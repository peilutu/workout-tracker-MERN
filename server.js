require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

//express app
const app = express();

//--- middleware ---
//use is to use middleware: the func is t ofire for every request that comes in
//next: run at the end the this middleware in order to move on to the next piece of middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
// app.get("/", (req, res) => {
//   res.json({ messg: "welcome to my app" });
// });

app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URL) //this is asynchronous so it takes a little bit of time and return a promise
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening to port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
