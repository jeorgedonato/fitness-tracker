const router = require("express").Router();
const db = require("../models");
const moment = require("moment");

router.post("/api/workouts", async (req, res) => {
  try {
    const date = moment().format("YYYY-MM-DD HH:mm");
    const data = await db.Workout.create({ day: date });
    // console.log(data);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  // console.log(req.body)
  try {
    const workout = await db.Workout.findById(req.params.id);
    // console.log(req.body)
    workout.totalDuration += parseInt(req.body.duration);
    workout.exercises.unshift(req.body);
    const data = await workout.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json(error);
  }

});

//Get Last Workout
router.get('/api/workouts/', (req, res) => {
  db.Workout.find().then(data => {
    res.status(201).json(data);
  })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Get Range
router.get('/api/workouts/range', (req, res) => {
  db.Workout.find().then(data => {
    res.status(201).json(data);
  })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/api/workouts/:id', (req, res) => {
  db.Workout.find({ _id: req.params.id }).then(data => {
    res.status(201).json(data);
  })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;