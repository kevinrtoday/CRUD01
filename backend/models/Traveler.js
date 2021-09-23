const { Schema, model } = require("mongoose");

const TravelerSchema = Schema({
  id: String,
  name: String,
  email: String,
  age: Number,
  country: String,
});

module.exports = model("Traveler", TravelerSchema);
