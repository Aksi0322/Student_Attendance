import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Contactus from "./pages/Contactus";
import Feedback from "./pages/Feedback";
import Staff from "./pages/Staff";
import Header from "./components/Header";
import Student from "./pages/Student";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Staff" element={<Staff />} />        
        <Route path="/Student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}
