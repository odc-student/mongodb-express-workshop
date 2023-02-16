/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

// app config
dotenv.config();
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// db config
const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected successfully ");
    },
    (error) => {
      console.log("Could not connect to database : " + error);
    }
  );

// api routes
const workshopRoutes = require("./src/routes/workshopRoutes");
app.use("/api/v1/", workshopRoutes);

// listen
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
