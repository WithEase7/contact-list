import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AddContact from "./Components/AddContact";
import EditContact from "./Components/EditContact";
import Dialog from "@mui/material/Dialog";

const App = () => {
  return (
    <Dialog
      open={true}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <div style={{height: "600px"}}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit" element={<EditContact />} />
        </Routes>
      </Router>
      </div>
    </Dialog>
  );
};
export default App;
