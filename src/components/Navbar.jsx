import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLight } from "../utils/ToggleSlice";
import { Link } from "react-router-dom";

//14CF93

const Navbar = ({light}) => {

const dispatch = useDispatch()

 const onOff=()=>{
  dispatch(switchLight())
 }

//  const light = useSelector((store)=> store.toggle.value)


  return (
    <div className={`navbar  ${light ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <div className="navbar-start" data-aos="fade-down" data-aos-duration='1000'>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/home'>Home </Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
             <Link to='/socials'> Socials </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Abhishek Rawat</a>
      </div>
      <div data-aos="fade-down" data-aos-duration='1000' className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Socials</a>
          </li>
        </ul>
      </div>
      <div data-aos="fade-down" data-aos-duration='1000' className="navbar-end">
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
          onClick={()=> onOff()}
        />
      </div>
    </div>
  );
};

export default Navbar;
