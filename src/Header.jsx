import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <nav className="grid grid-cols-5 gap-8 p-4 bg-red-700 text-white  rounded-sm w-full sm:w-1/2 m-auto">

      <Link
          to="/"
       
        >
          Home
        </Link>


        <Link
          to="/about-food"
       
        >
          Food
        </Link>
        <Link
          to="/about-fruits"
         
        >
           Fruits
        </Link>
        <Link
          to="/about-tour"
        
        >
          Tour
        </Link>
        <Link
          to="/about-life"
    
        >
         Life
        </Link>
      </nav>
    </header>
  );
};

export default Header;
