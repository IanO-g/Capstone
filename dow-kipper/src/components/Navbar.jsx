import React from 'react'
import logo from "../assets/logoName.png"
import {
  SearchIcon,
  ShoppingCartIcon,
  BellIcon,
} from "@heroicons/react/outline";


const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-400 flex items-center justify-center">
        <img className="w-16 h-16 mr-6" src={logo} alt="logo" />
        <ul className="flex items-center justify-center h-16">
          <li className="mr-6">Shop By Category</li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 text-gray-800 rounded-full py-2 px-24 pl-10 focus:outline-none focus:ring focus:border-blue-300 mr-6"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <ul className="flex items-center justify-center h-16">
          <li className="mr-6">Home</li>
          <li className="mr-6">About</li>
          <li className="mr-6">Services</li>
          <li className="mr-6">Contact</li>
          <li className="mr-6">Sign-Up</li>
          <li className="mr-6">Login</li>
        </ul>
        <div className="flex space-x-4">
          <a href="/shopping" className="text-black">
            <ShoppingCartIcon className="h-6 w-6" />
          </a>
          <a href="/alerts" className="text-black">
            <BellIcon className="h-6 w-6" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar