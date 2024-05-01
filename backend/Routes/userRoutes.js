const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const authController = require("../Controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
