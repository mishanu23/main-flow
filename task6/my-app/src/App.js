

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Greeting from "./components/Greeting";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Logo */}
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Welcome to My React App</h1>

          {/* Navigation Links using Link for proper routing */}
          <nav>
            <Link to="/">Home</Link> | <Link to="/greet">Greet</Link>
          </nav>

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/greet" element={<Greeting name="Anubhuti" />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
