import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-200 to-gray-100 shadow-md">      
      <div className="flex justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-white text-lg ">Attendance</span>
            <span className="text-black text-lg ">Portal</span>
          </h1>
        </Link>
        
        <ul className="flex gap-6 font-bold">
          <Link to="/">
            <li className="hideen sm:inline text-black cursor-pointer">Home</li>
          </Link>
          <Link to="/Admin">
            <li className="hideen sm:inline text-black cursor-pointer ">
              Admin
            </li>
          </Link>
          <Link to="/Staff">
            <li className="hideen sm:inline text-black cursor-pointer ">
              Staff
            </li>
          </Link>
          <Link to="/Student">
            <li className="hideen sm:inline text-black cursor-pointer">
              Student
            </li>
          </Link>
          <Link to="/Contactus">
            <li className="hideen sm:inline text-black cursor-pointer ">
              Contact US
            </li>
          </Link>
          <Link to="/Feedback">
            <li className="hideen sm:inline text-black cursor-pointer ">
              FeedBack
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
