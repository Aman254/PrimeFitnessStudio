const Exercise = require("./../Models/exerciseModel");
const ApiFeatures = require("./../utils/apiFeatures");

exports.getAllExercises = async (req, res, next) => {
  try{
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
  
}catch(error){
  res.status(400).json({
    status: "Failed",
    message: error,
  });
}
};

exports.getExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      throw new Error("Can Find Exercise with the Id");
    }

    res.status(200).json({
      status: "Sucess",
      data: {
        exercise,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};
exports.getExerciseWithId = async (req, res, next) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      throw new Error("Can Find Exercise with the Id");
    }
    res.status(200).json({
      status: "Sucess",
      data: {
        exercise,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};
