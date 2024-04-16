const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
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
    select: false, // This is for when we give a get req to user if its false it will not show the field
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please Confirm your password"],
    validate: {
      //This only works on Save and Create!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not same",
    },
  },
  passwordChangedAt: Date,
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  //Hash the Password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the Password Confirm
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    console.log(this.passwordChangedAt, JWTTimestamp);
    return JWTTimestamp < changedTimeStamp;
  }
  // False means not changed
  return false;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
