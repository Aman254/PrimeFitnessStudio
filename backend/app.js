const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const AppError = require("./utils/appError");

const exerciseRouter = require("./Routes/exerciseRoutes");
const userRouter = require("./Routes/userRoutes");

const app = express();
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

//Routes
app.use("/api/v1/exercises", exerciseRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this Server`, 404));
});

module.exports = app;
