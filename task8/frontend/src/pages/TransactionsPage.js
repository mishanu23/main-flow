import React, { useState, useEffect } from "react";
import { getTransactions } from "../api";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTransactions()
      .then((res) => {
        setTransactions(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching transactions:", err);
        setError("Failed to load transactions");
        setLoading(false);
      });
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Transactions Report", 14, 15);

    const tableColumn = [
      "Transaction ID",
      "Buyer Name",
      "Product Name",
      "Quantity",
      "Total Amount",
      "Date",
      "Payment Method",
      "Status"
    ];
    const tableRows = [];

    transactions.forEach((transaction) => {
      const rowData = [
        transaction._id,
        transaction.buyerId?.name || "Unknown Buyer",
        transaction.productName,
        transaction.quantity,
        `$${transaction.totalAmount}`,
        new Date(transaction.transactionDate).toLocaleDateString(),
        transaction.paymentMethod,
        transaction.status
      ];
      tableRows.push(rowData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20
    });

    doc.save("transactions_report.pdf");
  };

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2>Transactions</h2>
      <button onClick={exportToPDF}>Export to PDF</button> {/* ✅ Add export button */}
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Buyer Name</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Transaction Date</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction._id}</td>
                <td>{transaction.buyerId?.name || "Unknown Buyer"}</td>
                <td>{transaction.productName}</td>
                <td>{transaction.quantity}</td>
                <td>${transaction.totalAmount}</td>
                <td>{new Date(transaction.transactionDate).toLocaleDateString()}</td>
                <td>{transaction.paymentMethod}</td>
                <td>{transaction.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsPage;
