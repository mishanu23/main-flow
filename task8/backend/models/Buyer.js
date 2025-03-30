const mongoose = require("mongoose");

const BuyerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String },
  totalSpent: { type: Number, default: 0 },
  paymentMethod: { type: String, default: "Credit Card" },
}, { timestamps: true });

module.exports = mongoose.model("Buyer", BuyerSchema);
