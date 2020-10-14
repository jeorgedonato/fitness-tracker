let mongoose = require("mongoose");
let db = require("../models");
let moment = require("moment")
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: moment().subtract(10, 'days').toISOString(),
    dateTime: moment().subtract(10, 'days').unix(),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: moment().subtract(9, 'days').toISOString(),
    dateTime: moment().subtract(9, 'days').unix(),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: moment().subtract(8, 'days').toISOString(),
    dateTime: moment().subtract(8, 'days').unix(),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: moment().subtract(7, 'days').toISOString(),
    dateTime: moment().subtract(7, 'days').unix(),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: moment().subtract(6, 'days').toISOString(),
    dateTime: moment().subtract(6, 'days').unix(),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: moment().subtract(5, 'days').toISOString(),
    dateTime: moment().unix(),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: moment().subtract(4, 'days').toISOString(),
    dateTime: moment().subtract(4, 'days').unix(),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: moment().subtract(3, 'days').toISOString(),
    dateTime: moment().subtract(3, 'days').unix(),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: moment().subtract(2, 'days').toISOString(),
    dateTime: moment().subtract(2, 'days').unix(),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: moment().subtract(1, 'days').toISOString(),
    dateTime: moment().subtract(1, 'days').unix(),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.insertMany(workoutSeed))
  .then(data => {
    // console.log(data.result.n + " records inserted!");
    console.log(data)
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
