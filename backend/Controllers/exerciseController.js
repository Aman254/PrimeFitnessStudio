const Exercise = require("./../Models/exerciseModel");
const ApiFeatures = require("./../utils/apiFeatures");
const catchAsync = require("./../utils/catchAsync");

exports.getAllExercises = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Exercise.find(), req.query)
    .filter()
    .limitFields()
    .paginate();

  const exercises = await features.query;

  //Send Response

  res.status(200).json({
    results: exercises.length,
    status: "Sucess",
    data: {
      exercises,
    },
  });
});
