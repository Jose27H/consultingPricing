import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./components/Button";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import StandardPage from "./pages/StandardPage";
import EnterprisePage from "./pages/EnterprisePage";
import ContactPage from "./pages/ContactPage";
import SaleContact from "./pages/SaleContact";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pricing" element={<Example />} />
          <Route exact path="/ProductPage" element={<ProductPage />} />
          <Route exact path="/StandardPage" element={<StandardPage />} />
          <Route exact path="/EnterprisePage" element={<EnterprisePage />} />
          <Route exact path="/ContactPage" element={<ContactPage />} />
          <Route exact path="/SaleContact" element={<SaleContact />} />
        </Routes>
      </Router>
    </div>
  );
}
