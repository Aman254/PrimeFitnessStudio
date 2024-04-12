const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Exercise = require("./../../Models/exerciseModel");

dotenv.config({ path: "./../../config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {})
  .then(() => console.log("DB Conncted Sucessfully"))
  .catch((err) => {
    console.error("Connection Error", err);
  });

// Read JSON File

const exercise = JSON.parse(
  fs.readFileSync(`${__dirname}/allExercises.json`, "utf-8")
);

// Import Data Into DB

const importData = async () => {
  try {
    await Exercise.create(exercise);
    console.log("Data sucessfully Loaded");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete All Data from collection

const deleteData = async () => {
  try {
    await Exercise.deleteMany();
    console.log("Data Deleated Sucessfully");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
