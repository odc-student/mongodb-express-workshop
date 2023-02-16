/* -------------------------------------------------------------------------- */
/*                                 Dependecies                                */
/* -------------------------------------------------------------------------- */
// Packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* -------------------------------------------------------------------------- */
/*                               Workshop Schema                              */
/* -------------------------------------------------------------------------- */

// Create a schema
const workshopSchema = new Schema({
  name: String,
  description: String,
  date: Date,
});

// Export the model
module.exports = mongoose.model("Workshop", workshopSchema);
