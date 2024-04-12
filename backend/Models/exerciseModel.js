const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An Exercise must have a Name"],
  },
  bodyPart: {
    type: String,
    required: [true, "An Exercise must have an BodyPart"],
  },
  focusArea: {
    type: String,
    required: [true, "An Exercise must have an Focus Area"],
  },
  equipment: {
    type: String,
    required: [true, "An Exercise must have an Equipment"],
  },
  execution: {
    type: [String],
    required: [true, "An Exercise must have and Execution"],
  },
  imageCover: {
    type: String,
    required: [true, "An Exercise must have an Cover Image"],
  },
  videoUrl: {
    type: String,
    required: [true, "An Exercise must have an Video URL"],
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
