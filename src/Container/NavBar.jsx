import React from 'react';
import images from '../assets/Image';
import "../Container/NavBar.css";
import "../Pages/ContactPage";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="navbar-brand">
                <img src={images.image5} className="Logo" alt="img" />
                <span>ForeverFaith</span>
            </div>
            {!menuOpen && ( 
            <div className="navbar-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            )}
                <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    <li>Home</li>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <li>Hairs</li>
                    <li>HandBags</li>
                    <li>Enhancement Product</li>
                </ul>
        </nav>
    );
};

export default NavBar