import React, { useEffect, useState } from "react";
import { getBuyers } from "../api";

function BuyersList() {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    getBuyers().then((res) => setBuyers(res.data));
  }, []);

  return (
    <div>
      <h2>Buyers</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((buyer) => (
            <tr key={buyer._id}>
              <td>{buyer.name}</td>
              <td>{buyer.email}</td>
              <td>{buyer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BuyersList;
