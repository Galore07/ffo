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
                
            <Link to="/">   <img src={images.image5} className="Logo" alt="img" /> </Link>
                <Link to="/" className='yale'>ForeverFaith</Link>
                
            </div>
            {!menuOpen && (
                <div className="navbar-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}

            <i>
                <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>

                    <li>
                        <Link to="/" className='house'>Home</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>


                    <li>Hairs</li>

                    <li>
                        <Link to="/hand-bags">HandBags</Link>
                    </li>

                    <Link to="/enhancement-products">
                        <li>Enhancement Product</li>
                    </Link>
                </ul>
            </i>
        </nav>
    );
};

export default NavBar