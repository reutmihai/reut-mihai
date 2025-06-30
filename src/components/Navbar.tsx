import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-3 border-b-[1px] border-[var(--color-purple)]">
    <nav className="bg-transparent py-3 px-15 flex justify-center items-center gap-10">
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
