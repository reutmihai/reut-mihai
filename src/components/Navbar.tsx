import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-3">
    <nav className="py-3 px-15 flex justify-center items-center gap-10 border-b-[2px] border-[var(--color-purple)]">
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
        About Me
      </NavLink>
    </nav>
    </div>
  );
};

export default Navbar;
