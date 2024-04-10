const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();
const exercises = JSON.parse(
  fs.readFileSync(`${__dirname}/Data/data/CompleteData/completedata.json`)
);
app.get("/api/v1/exercises", (re, res) => {
  res.status(200).json({
    status: "Sucess",
    results: exercises.length,
    data: {
      exercises,
    },
  });
});

app.use(morgan("dev"));
module.exports = app;
