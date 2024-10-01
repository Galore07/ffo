import React from 'react';
import './ContactPage.css'; // Make sure to create this CSS file
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className="contact-container">

            <h1><i>CONTACT US</i></h1>
            {/* <p>FEEL FREE TO reach out to us at the addresses below:</p> */}

            <div className="address">
                <h2 className='naija'>GERMANY ADDRESS</h2> <br />
                <p><i>
                    Eisenbahn Straße 8<br />
                    74731 Walldürn<br />
                    Germany<br />
                    <a href="mailto:Foreverfaith@gmail.com">Foreverfaith@gmail.com</a><br />
                    <a href="tel:+4917614351218">+49 176 1435 1218</a>
                </i></p>
            </div>

            <div className="address">
                <h2 className='naija'>NIGERIA ADDRESS</h2> <br />
                <p><i>
                    Km 8, Opp Rock of Ages Church, Sapele Rd<br />
                    Benin City, Edo State,<br />
                    Nigeria<br />
                    <a href="mailto:Foreverfaith@gmail.com">Foreverfaith@gmail.com</a><br />
                    <a href="tel:+2348119181841">+234 81 1918 1841</a>
                </i></p>
            </div>

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
        </div>
    );
};

export default ContactPage;