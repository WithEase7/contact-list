import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit" element={<EditContact />} />
      </Routes>
    </Router>
  );
};
export default App;
