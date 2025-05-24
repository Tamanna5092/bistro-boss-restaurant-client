import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="uppercase font-medium"><Link to={"/"}>Home</Link></li>
      <li className="uppercase font-medium"><Link to={""}>Dashboard</Link></li>
      <li className="uppercase font-medium"><Link to={"/ourMenu"}>Our menu</Link></li>
      <li className="uppercase font-medium"><Link to={""}>Our shop</Link></li>
      <li className="uppercase font-medium"><Link to={"/order/salad"}>Order Food</Link></li>
      <li className="uppercase font-medium"><Link to={"/contact"}>Contact</Link></li>
    </>
  );

  return (
    <div className="navbar bg-opacity-30 bg-black absolute top-0 text-white z-10 p-0 md:px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <div className="flex flex-col">
          <a className="text-base font-bold uppercase md:text-xl">Bistro boss</a>
        <span className="font-medium tracking-[0.02rem] uppercase md:tracking-[0.2rem]">Restaurant</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
           {navOptions}
        </ul>
      </div>
      <div className="flex items-center gap-2 navbar-end">
        <a className="text-white text-lg bg-green-600 p-1 rounded-3xl"><TiShoppingCart></TiShoppingCart></a>
        <a className="uppercase font-medium"><Link to={"/signIn"}>Sign In</Link></a>
      <a className="uppercase font-medium"><Link to={"/signUp"}>Sign Up</Link></a>
      </div>
    </div>
  );
};

export default Navbar;
