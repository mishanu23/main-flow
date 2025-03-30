import React from "react";
import "./styles.css";

import { Route, Routes, Link } from "react-router-dom"; 
import BuyersPage from "./pages/BuyersPage";
import ProductsPage from "./pages/ProductsPage";
import TransactionsPage from "./pages/TransactionsPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Buyers</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<BuyersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
