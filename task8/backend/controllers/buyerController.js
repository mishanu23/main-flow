const Buyer = require("../models/Buyer");

// Get all buyers
const getBuyers = async (req, res) => {
  try {
    const buyers = await Buyer.find();
    res.json(buyers);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Add a new buyer
const addBuyer = async (req, res) => {
  try {
    const newBuyer = new Buyer(req.body);
    await newBuyer.save();
    res.status(201).json(newBuyer);
  } catch (error) {
    res.status(400).json({ error: "Invalid Data" });
  }
};

module.exports = { getBuyers, addBuyer };
