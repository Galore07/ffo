import React from 'react';
import images from "../assets/Image";
import "../Component/Section.css";
// import "../MainContent/Main";
// import "../Container/Footer";
import Enhancement from '../EnhancementPd/Enhancement';
import { Link } from 'react-router-dom';


const HeroSection = () => {
    return (

        <div className="grid-con">

            
                <Link to="/enhancement-products" className="grid-item">
                <img src={images.image29} alt="" className="" />
                <div className="text-overlay">Enhancement Products</div>
                </Link>
            

            <Link to="/" className="grid-item">
                <img src={images.image10} alt="" className="" />
                <div className="text-overlay">Hairs</div>

            </Link>

            <Link to="/hand-bags" className="grid-item">
                <img src={images.image11} alt="" className="" />
                <div className="text-overlay">Bags</div>

            </Link>

        </div>






    );
};

export default HeroSection