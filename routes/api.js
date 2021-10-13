const router = require("express").Router();
//require the model
const Workout = require('../models/workout.js')

//api/workouts
router.get("/api/workouts", (req,res)=>{
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})
//api/range
///api/workouts/range


module.exports = router;