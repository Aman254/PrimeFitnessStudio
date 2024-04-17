const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;
console.log(DB);

mongoose
  .connect(DB, {})
  .then(() => console.log("DB Conncted Sucessfully"))
  .catch((err) => {
    console.error("Connection Error", err);
  });

/*Server Starts*/

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App Running on ${port}`);
});

module.exports = app;
