import React, { useState, useEffect } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("price");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "stock") return a.stock - b.stock;
    return a.category.localeCompare(b.category);
  });

  const getStockColor = (stock) => {
    if (stock === 0) return "red";
    if (stock <= 10) return "yellow";
    return "green";
  };

  return (
    <div>
      <h2>Products</h2>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="price">Sort by Price</option>
        <option value="stock">Sort by Stock</option>
        <option value="category">Sort by Category</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td style={{ backgroundColor: getStockColor(product.stock) }}>
                {product.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
