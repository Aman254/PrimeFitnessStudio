const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.model({
  name: {
    type: String,
    required: [true, "A user must have a Name"],
  },
  email: {
    type: String,
    required: [true, "A user must have an Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please Provide the password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please Confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not same",
    },
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
