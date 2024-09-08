import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-gray-800 text-2xl font-bold hover:text-blue-500 transition duration-300"
        >
          Home
        </Link>

        <ul className="flex space-x-6">
          <NavItem to="/about">About</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/register">Register</NavItem>
        </ul>

        <SearchBar />
      </div>
    </nav>
  );
};

const NavItem = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-gray-600 hover:text-blue-500 transition duration-300"
    >
      {children}
    </Link>
  </li>
);

const SearchBar = () => (
  <div className="relative">
    <input
      type="text"
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
      placeholder="Search..."
    />
    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
      <img src={searchIcon} alt="Search" className="w-6 h-6" />
    </button>
  </div>
);

export default Navbar;
