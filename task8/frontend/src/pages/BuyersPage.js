import React, { useState, useEffect } from "react";

const BuyersPage = () => {
  const [buyers, setBuyers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/buyers")
      .then((res) => res.json())
      .then((data) => setBuyers(data));
  }, []);

  const filteredBuyers = buyers.filter((buyer) =>
    buyer.name.toLowerCase().includes(search.toLowerCase()) ||
    buyer.email.toLowerCase().includes(search.toLowerCase()) ||
    buyer.phone.includes(search)
  );

  return (
    <>
     

      <div className="container">
        {/* ✅ Search Bar is inside the container and above the table */}
        <h2>Buyers</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by name, email, or phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* ✅ Buyers Table */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredBuyers.map((buyer) => (
              <tr key={buyer._id}>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>{buyer.phone}</td>
                <td>{buyer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BuyersPage;
