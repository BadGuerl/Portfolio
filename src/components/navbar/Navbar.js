import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navbar = () => {
  return (
    <nav className="nav-style active">
      <ul>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
      </ul>
    </nav>
  )
}
 
export default Navbar;