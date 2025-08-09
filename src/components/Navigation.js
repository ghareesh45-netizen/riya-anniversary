import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <motion.nav 
      className="main-navigation"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <span className="heart-icon">❤️</span> Riya & Me
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/journey" className={({ isActive }) => isActive ? 'active' : ''}>
              Our Journey
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/memories" className={({ isActive }) => isActive ? 'active' : ''}>
              Memories
            </NavLink>
          </li>
          <li>
            <NavLink to="/love-notes" className={({ isActive }) => isActive ? 'active' : ''}>
              Love Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/special-moments" className={({ isActive }) => isActive ? 'active' : ''}>
              Special Moments
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;