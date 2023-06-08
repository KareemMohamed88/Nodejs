//import all Frameworks & library
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const categoryRoute = require("./Routes/categoryRoute");
const connection = require("./config/conn");
dotenv.config({ path: "config.env" });
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

//DB connection
connection();

if (process.env.NODE_ENV == "devolpment") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

//my routes
app.get("/", (req, res) => {
  res.send("app runed");
});

app.use("/api/v1/categorys", categoryRoute);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
