import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-12 bg-green-500 z-50">
      <div className="flex justify-between">
        <Link
          to="/"
          className="left-0 text-2xl font-bold text-white p-2 cursor-pointer"
        >
          Simple Pokemon App
        </Link>
        <Link
          to="/compare"
          className="right-0 border-2 rounded text-xm font-bold text-white p-2 cursor-pointer bg-blue-500 h-10 flex items-center justify-center mt-1 mx-2"
        >
          Compare
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
