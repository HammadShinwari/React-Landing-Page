import React, { useState } from 'react';

// style file import 
import '../style/navbar.css';

// Functional component
const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <nav>
                <h2>Landing Page</h2>
                <div>
                    <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="#" className='active'>Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={handleClick}>
                    <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
