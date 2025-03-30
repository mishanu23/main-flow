const Transaction = require("../models/Transaction");

// Get all transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate("buyerId productId");
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Add a new transaction
const addTransaction = async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ error: "Invalid Data" });
  }
};

module.exports = { getTransactions, addTransaction };
