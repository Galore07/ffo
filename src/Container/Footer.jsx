import React from 'react'
import "../Container/Footer.css"
import images from '../assets/Image'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer">

        <div className="grid-container">

          <div className="grid-box">
            <div className="meu">COMPANY</div>
            <div>About</div>
            <div>Contact</div>
            <div>Shop</div>
          </div>

          <div className="grid-box">
            <img src={images.image5} alt="" />
            <h3>ForeverFaith</h3>
          </div>

          <div className="grid-box">

            <div> Send a review</div>
            <div>
              <input type="text" className='one' />
              <button className='galore'>Submit</button>
            </div>
          </div>
        </div>
      </footer>


      <div className="social-icons">

        <div className="icons-container">
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="social-icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>

        <h3 className='jux'>© 2024 Foreverfaith. All rights reserved</h3>

        <div><img src={images.image30} alt="" /></div>

      </div>
    </>

  )
}

export default Footer