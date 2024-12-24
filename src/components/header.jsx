import React from 'react';
import Slogo from '../assets/RlogoS.png';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-stone-800 text-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="flex items-center ml-10 space-x-3">
        <img
          src={Slogo}
          alt="Logo"
          className="h-20"
        />
      </div>

      {/* Right Side: Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-3xl font-mono">
          <li>
            <NavLink to="/" className="hover:text-yellow-400 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-yellow-400 transition">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/cast" className="hover:text-yellow-400 transition">
              Cast
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
