const express = require("express");
const morgan = require("morgan");
const exerciseRouter = require("./Routes/exerciseRoutes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/exercises", exerciseRouter);

module.exports = app;
