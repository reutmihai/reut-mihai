import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center mt-3">
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex sm:py-3 sm:px-15 sm:justify-center sm:items-center sm:gap-10 sm:border-b-[2px] sm:border-[var(--color-purple)]">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden fixed top-5 right-5 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`sm:hidden fixed inset-0 bg-[var(--color-purple)] text-white flex flex-col items-center justify-center gap-10 text-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:opacity-80"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:opacity-80"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:opacity-80"
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
