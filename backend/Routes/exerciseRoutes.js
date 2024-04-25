const express = require("express");
const router = express.Router();
const exercisecontroller = require("./../Controllers/exerciseController");
const authController = require("./../Controllers/authController");
router.route("/").get(exercisecontroller.getAllExercises);
router.route("/:id").get(exercisecontroller.getExercise);

// authController.protect,

module.exports = router;
