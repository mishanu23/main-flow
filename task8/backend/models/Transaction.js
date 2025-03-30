const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: "Buyer", required: true }, // ✅ Ensure required
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    transactionDate: { type: Date, default: Date.now },
    paymentMethod: { type: String, default: "Credit Card" },
    status: { type: String, enum: ["Completed", "Pending", "Cancelled"], default: "Completed" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
