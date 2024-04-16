const { promisify } = require("util");
const User = require("./../Models/userModel");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/appError");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);
    res.status(201).json({
      status: "Sucess",
      token,
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
  next();
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // 1) Check if email and password exist
    if (!email || !password) {
      return next(new AppError("Please provide email and password", 400));
    }

    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email: email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }

    // 3) if everything ok, send token to client
    const token = signToken(user._id);
    res.status(200).json({
      status: "Sucess",
      token,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      Message: error,
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    // 1) Getting token and check if its there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    // console.log(token);

    if (!token) {
      return next(new AppError("Your are not logged In! Please Login", 401));
    }
    // 2) Validate the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log(decoded);
    // 3) Check if user still exists
    const freshUser = await User.findById(decoded.id);
    if (!freshUser) {
      return next(new AppError("The User does no Longer Exist", 401));
    }
    //4) Check if user change password after the token was issued
    if (freshUser.changedPasswordAfter(decoded.iat)) {
      return next(
        new AppError("User Recently changed password please log in Again", 401)
      );
    }

    // Grant ACess to protected Route
    req.user = freshUser;
    next();
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};
