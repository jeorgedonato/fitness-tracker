const router = require("express").Router();
const db = require("../models");

router.post("/workouts/:id", ({ body }, res) => {
  db.Workout.update({ _id: req.params.id }, { body })
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;