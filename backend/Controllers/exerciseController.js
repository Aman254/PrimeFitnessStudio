const Exercise = require("./../Models/exerciseModel");
const ApiFeatures = require("./../utils/apiFeatures");

exports.getAllExercises = async (req, res) => {
  const features = new ApiFeatures(Exercise.find(), req.query)
    .filter()
    .limitFields()
    .paginate();

  const exercises = await features.query;

  //Send Response
  try {
    res.status(200).json({
      results: exercises.length,
      status: "Sucess",
      data: {
        exercises,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};
