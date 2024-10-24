import React from 'react';
import images from '../assets/Image';
import "../Container/NavBar.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useSelector } from 'react-redux';


const NavBar = ({toggleCart}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [cartOpen, setCartOpen] = useState(false); 
    const cartCount = useSelector(state => state.cartCount.totalQuantity);   // get total items count from redux

    return (
        <nav>
            <div className="navbar-brand">

                <Link to="/">   <img src={images.image5} className="Logo" alt="img" /> </Link>
                <Link to="/" className='yale'>Foreverfaith</Link>

            </div>

            {!menuOpen && (
                <div className="navbar-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
            

                <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>

                    <li className="close-menu" onClick={() => setMenuOpen(false)}>X</li>

                    <li>
                        <Link to="/" className='house' onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>

                    <li>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </li>


                    <li onClick={() => setMenuOpen(false)}>Hairs</li>

                    <li>
                        <Link to="/hand-bags" onClick={() => setMenuOpen(false)}>HandBags</Link>
                    </li>

                    <li>
                        <Link to="/enhancement-products" onClick={() => setMenuOpen(false)}>Enhancement Product</Link>
                    </li>

                </ul>
            

            <div className='arrow'>
                <PiShoppingCartSimpleBold className="cart" onClick={toggleCart} />
                <span className='cart-count'>{cartCount}</span>
            </div>

            {/* {cartOpen && <Cart onClose={() => setCartOpen(false)} />} */}
        </nav>
    );
};

export default NavBar