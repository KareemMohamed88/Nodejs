const mongoose = require("mongoose");

const connection = () => {
  mongoose
  .connect(process.env.DB_URL)
  .then((conn) => {
    console.log("Database connect succesfully");
  })
  .catch((err) => {
    console.error(`please solve ${err}`);
    process.exit(1);
  });
}

module.exports = connection