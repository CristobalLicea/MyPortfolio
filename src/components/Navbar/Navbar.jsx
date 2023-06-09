import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <div id="navbar">
      <div>coder.cristobal.dev</div>
      <div>
        <ul>
          <li onClick={(e) => {
            e.preventDefault();
            document.querySelector('#homepage').scrollIntoView({ behavior: 'smooth'})
          }}>Home</li>
          <li onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth'})
          }}>About me</li>
          <li onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth'})
          }}>Projects</li>
          <li onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth'})
          }}>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;