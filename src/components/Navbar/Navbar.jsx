import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <div id="navbar">
      <div>coder.cristobal.dev</div>
      <div>
        <ul>
          <li>Home</li>
          <li onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth'})
          }}>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;