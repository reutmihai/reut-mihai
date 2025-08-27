import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center mt-3">
      <nav className="hidden sm:py-3 sm:px-15 sm:flex sm:justify-center sm:items-center sm:gap-10 sm:border-b-[2px] sm:border-[var(--color-purple)]">
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
      <button
        className="md:hidden fixed top-5 right-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex fixed top-1 left-2  z-index-1000 items-center bg-[var(--color-purple)] gap-15 py-5 px-5 rounded-lg shadow-md border-2 border-[var(--color-white)]">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
