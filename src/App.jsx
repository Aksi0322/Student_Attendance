import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Contactus from "./pages/Contactus";
import Feedback from "./pages/Feedback";
import Staff from "./pages/Staff";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Staff" element={<Staff />} />
      </Routes>
    </BrowserRouter>
  );
}
