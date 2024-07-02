'use client'

import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from "next/navigation";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md md:rounded-br-full md:rounded-bl-full">
      <nav className="flex items-center justify-between p-4 md:px-10">
        {/* Left Side: Pinterest Name */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ">Pinterest</h1>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
          </button>
        </div>

        {/* Center and Right Side: Menu Items and Search Input */}
        <div className="hidden md:flex md:items-center  md:space-x-8">
          <ul className="flex space-x-8">
            <li onClick={()=> {router.push("/")}} className="text-gray-700 hover:text-bg_Color cursor-pointer">Home</li>
            <li onClick={()=> {router.push("/generate")}} className="text-gray-700 hover:text-bg_Color cursor-pointer">Generate</li>
            <li onClick={()=> {router.push("/about")}} className="text-gray-700 hover:text-bg_Color cursor-pointer">About Us</li>
          </ul>
          <div className="relative ml-4">
            <input 
              type="text" 
              placeholder="Search" 
              className="px-4 py-2 pl-10 border rounded-full text-gray-700 focus:outline-none focus:ring-1 focus:ring-bg_Color"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white p-4 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold ">Pinterest</h1>
          <button onClick={toggleMenu}>
            <FaTimes className="text-2xl text-gray-700" />
          </button>
        </div>
        <ul className="space-y-4">
        <li onClick={()=> {router.push("/")}} className="text-gray-700 hover:text-bg_Color cursor-pointer">Home</li>
            <li onClick={()=> {router.push("/generate")}} className="text-gray-700 hover:text-bg_Color cursor-pointer">Generate</li>
            <li onClick={()=> {router.push("/about")}} className="text-gray-700 hover:text-bg_Color cursor-pointer">About Us</li>
        </ul>
        <div className="relative mt-4">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-4 py-2 pl-10 border rounded-full text-gray-700 focus:outline-none focus:ring-1 focus:ring-bg_Color w-full"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-500 " />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
