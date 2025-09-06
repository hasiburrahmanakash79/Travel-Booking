import { useState } from 'react';
import logo from '../../assets/logo/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); // Default active item is Home

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
        </div>

        {/* Navigation Links and Buttons Wrapper */}
        <div className="flex-1 flex items-center lg:justify-center justify-end">
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className={`hover:underline font-medium ${activeItem === "Home" ? "text-green-600" : ""}`}
                  onClick={() => setActiveItem("Home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/hotel-request"
                  className={`hover:underline font-medium ${activeItem === "Hotel Request" ? "text-green-600" : ""}`}
                  onClick={() => setActiveItem("Hotel Request")}
                >
                  Hotel Request
                </Link>
              </li>
              <li>
                <Link
                  to="/offers"
                  className={`hover:underline font-medium ${activeItem === "Offers" ? "text-green-600" : ""}`}
                  onClick={() => setActiveItem("Offers")}
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`hover:underline font-medium ${activeItem === "About Us" ? "text-green-600" : ""}`}
                  onClick={() => setActiveItem("About Us")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={`hover:underline font-medium ${activeItem === "FAQ" ? "text-green-600" : ""}`}
                  onClick={() => setActiveItem("FAQ")}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Login and Signup Buttons */}
        <div className="space-x-4 hidden md:flex">
          <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 font-medium">
            Log in
          </button>
          <button className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 font-medium">
            Sign up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2 p-4 bg-white shadow-md rounded-lg">
            <li>
              <Link
                to="/"
                className={`text-green-600 hover:underline font-medium ${activeItem === "Home" ? "text-green-600" : ""}`}
                onClick={() => { setActiveItem("Home"); setIsOpen(false); }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/hotel-request"
                className={`hover:underline font-medium ${activeItem === "Hotel Request" ? "text-green-600" : ""}`}
                onClick={() => { setActiveItem("Hotel Request"); setIsOpen(false); }}
              >
                Hotel Request
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className={`hover:underline font-medium ${activeItem === "Offers" ? "text-green-600" : ""}`}
                onClick={() => { setActiveItem("Offers"); setIsOpen(false); }}
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`hover:underline font-medium ${activeItem === "About Us" ? "text-green-600" : ""}`}
                onClick={() => { setActiveItem("About Us"); setIsOpen(false); }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={`hover:underline font-medium ${activeItem === "FAQ" ? "text-green-600" : ""}`}
                onClick={() => { setActiveItem("FAQ"); setIsOpen(false); }}
              >
                FAQ
              </Link>
            </li>
            <li>
              <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 font-medium mt-2 w-full text-left">
                Log in
              </button>
            </li>
            <li>
              <button className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 font-medium mt-2 w-full text-left">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;