import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-3">
    <nav className="bg-[var(--color-primary)] py-3 px-15 flex justify-center items-center gap-5 border-1 border-gray rounded-full">
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
        to="/projects" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About Me
      </NavLink>
    </nav>
    </div>
  );
};

export default Navbar;
