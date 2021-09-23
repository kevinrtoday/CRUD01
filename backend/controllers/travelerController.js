const Traveler = require("../models/Traveler");

const getAllTravelers = async (req, res) => {
  const Profiles = await Traveler.find();
  try {
    return res.status(200).json(Profiles);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const getTravelerById = async (req, res) => {
  const { id } = req.params;
  const Profile = await Traveler.findById(id);
  try {
    return res.status(200).json(Profile);
  } catch (error) {
    return res.status(400).json({ message: "User not found" });
  }
};

const createTraveler = async (req, res) => {
  const Profile = await Traveler.create(req.body);
  try {
    return res.status(201).json(Profile);
  } catch (error) {
    return res.status(500).json({ message: "Coudn't create the Profile" });
  }
};

const updateTraveler = async (req, res) => {
  const { id } = req.params;
  const Profile = await Traveler.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(Profile);
  } catch (error) {
    return res.status(500).json({ message: "Cound't update Profile" });
  }
};

const deleteTraveler = async (req, res) => {
  const { id } = req.params;
  await Traveler.findByIdAndDelete(id);
  try {
    return res
      .status(203)
      .json({ message: "Successfully Deleted The Profile" });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't delete the Profile" });
  }
};

module.exports = {
  getAllTravelers,
  getTravelerById,
  createTraveler,
  updateTraveler,
  deleteTraveler,
};
