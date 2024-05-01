const User = require("./../Models/userModel");

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();
  console.log("called");
  //Send Response
  res.status(200).json({
    status: "Sucess",
    result: users.length,
    data: {
      users,
    },
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: "Failed",
    message: "server Error",
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: "Failed",
    message: "server Error",
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: "Failed",
    message: "server Error",
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: "Failed",
    message: "server Error",
  });
};
