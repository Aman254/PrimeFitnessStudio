const User = require("./../Models/userModel");

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "Sucess",
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: "Failed to Fetch Data",
    });
  }
};
