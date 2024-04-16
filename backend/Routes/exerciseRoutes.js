const express = require("express");
const router = express.Router();
const exercisecontroller = require("./../Controllers/exerciseController");
const authController = require("./../Controllers/authController");
router
  .route("/")
  .get(authController.protect, exercisecontroller.getAllExercises);
router.route("/:id").get(exercisecontroller.getExercise);

module.exports = router;
