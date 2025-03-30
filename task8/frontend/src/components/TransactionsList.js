import React, { useEffect, useState } from "react";
import { getTransactions } from "../api";

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then((res) => setTransactions(res.data));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Buyer</th>
            <th>Product</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx._id}>
              <td>{tx._id}</td>
              <td>{tx.buyerId}</td>
              <td>{tx.productId}</td>
              <td>${tx.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
