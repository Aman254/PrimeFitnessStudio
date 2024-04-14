const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./Controllers/errorController");
const exerciseRouter = require("./Routes/exerciseRoutes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/v1/exercises", exerciseRouter);
// app.use("/api/v1/users")

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this Server`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
