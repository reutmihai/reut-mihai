import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
