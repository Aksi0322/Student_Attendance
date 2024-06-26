import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 font-sans">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-green-500 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-70">
          Sing Up
        </button>
      </form>
      <div className="flex gap-2 mt-5 font-semibold">
        <p>Have an Account?</p>
        <Link to={"/SignIn"}>
        <span className="text-blue-600">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
