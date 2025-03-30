const express = require("express");
const Transaction = require("../models/Transaction");
const Buyer = require("../models/Buyer");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate({
        path: "buyerId",
        model: Buyer,
        select: "name email phone address", // ✅ Ensure name is selected
      })
      .populate("productId", "name category price"); 

    console.log("✅ Transactions fetched:", transactions); // 🔍 Debugging log

    res.json(transactions);
  } catch (error) {
    console.error("Transaction Fetch Error:", error);
    res.status(500).json({ message: "Error fetching transactions", error });
  }
});

module.exports = router;
