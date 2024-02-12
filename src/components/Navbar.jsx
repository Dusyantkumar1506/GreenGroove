import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="font-protest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-lime-400 text-2xl font-bold">
              GreenGroove
            </Link>
          </div>

          <nav className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-lime-400 focus:outline-none focus:text-lime-400"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>

          <nav
            className={`${
              isOpen
                ? "fixed inset-0 h-2/4 bg-lime-400 text-white z-50 flex flex-col justify-center items-center"
                : "hidden"
            } md:hidden`}
          >
            <button
              onClick={closeMenu}
              className="absolute top-0 right-0 m-4 text-white hover:text-lime-400 focus:outline-none"
              aria-label="Close navigation"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col items-center mt-4  text-2xl gap-5">
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/about"
                  className="text-white transition hover:underline hover:decoration-lime-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/careers"
                  className="text-white transition hover:underline hover:decoration-lime-400"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/services"
                  className="text-white transition hover:underline hover:decoration-lime-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  to="/products"
                  className="text-white transition hover:underline hover:decoration-lime-400"
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-base">
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 transition hover:underline decoration-lime-400 hover:decoration-lime-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-500 transition hover:underline decoration-lime-400 hover:decoration-lime-400"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-500 transition hover:underline decoration-lime-400 hover:decoration-lime-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-500 transition hover:underline decoration-lime-400 hover:decoration-lime-400"
                >
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
