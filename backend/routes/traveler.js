const express = require("express");
const {
  getAllTravelers,
  getTravelerById,
  createTraveler,
  updateTraveler,
  deleteTraveler,
} = require("../controllers/travelerController.js");
const router = express.Router();

module.exports = router;
