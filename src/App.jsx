import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
