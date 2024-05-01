const express = require("express");
const router = express.Router();
const exercisecontroller = require("./../Controllers/exerciseController");
const authController = require("./../Controllers/authController");
router.route("/").get(exercisecontroller.getAllExercises);
router.route("/:bodyPart").get(exercisecontroller.getExercise);
router.route("/exercisemodal/:id").get(exercisecontroller.getExerciseWithId);

// authController.protect,

module.exports = router;
