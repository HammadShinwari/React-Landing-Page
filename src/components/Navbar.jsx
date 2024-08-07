import React from "react";

// style file link
import '../style/Navbar.css'

function Navbar() {
  return (
    <>
      <nav>
        <h2>Landing Page</h2>
        <div>
          <ul id="navbar">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div id="mobile">
          <i id="bar"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
