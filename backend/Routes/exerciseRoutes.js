const express = require("express");
const router = express.Router();
const exercisecontroller = require("./../Controllers/exerciseController");

router.route("/").get(exercisecontroller.getAllExercises);
router.route("/:id").get(exercisecontroller.getExercise);

module.exports = router;
