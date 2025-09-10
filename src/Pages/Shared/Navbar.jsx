import { useState } from "react";
import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navButtons = [
    { id: "1", link: "/", label: "Home" },
    { id: "2", link: "/hotel-request", label: "Hotel Request" },
    { id: "3", link: "/offers", label: "Offers" },
    { id: "4", link: "/about-us", label: "About Us" },
    { id: "5", link: "/faq", label: "FAQ" },
  ];
  return (
    <>
      <nav className=" py-4 shadow-md fixed top-0 left-0 w-full z-50 bg-white">
        <div className="container px-5 mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-2" />
          </div>

          {/* Navigation Links and Buttons Wrapper */}
          <div className="flex-1 flex items-center lg:justify-center justify-end">
            <div className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6">
                {navButtons?.map((item) => (
                  <li key={item?.id}>
                    <NavLink
                      to={item?.link}
                      className={({ isActive }) =>
                        `hover:underline font-medium ${
                          isActive ? "text-green-600" : ""
                        }`
                      }
                    >
                      {item?.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Hamburger Menu for Small Screens */}
            <div className="md:hidden flex items-center">
              {isOpen ? (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700"
                >
                  <IoCloseSharp size={24} />
                </button>
              ) : (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              )}
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

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-2  absolute top-12 right-6 w-[60%]">
              <ul className="text-right space-y-2 p-4 bg-white/30 backdrop-blur-3xl shadow-md rounded-lg">
                {navButtons?.map((item) => (
                  <li key={item?.id}>
                    <NavLink
                      to={item?.link}
                      className={({ isActive }) =>
                        ` font-medium w-full ${
                          isActive ? "text-green-600 " : "text-black"
                        }`
                      }
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {item?.label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <button className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 font-medium mt-2 w-full text-center">
                    Log in
                  </button>
                </li>
                <li>
                  <button className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 font-medium  w-full text-center">
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
