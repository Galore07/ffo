import React from 'react'
import images from "../assets/Image"
// import "../Component/HeroSection.css"
import "../Component/Section.css"
import "../Component/Center"
import "../Component/Middle"
import "../MainContent/Main"
import "../Container/Footer"


const HeroSection = () => {
    return (

        <div class="grid-con">

            <div class="grid-item">
                <img src={images.image29} alt="" class="" />
                <div class="text-overlay">Enhancement Products</div>

            </div>

            <div class="grid-item">
                <img src={images.image10} alt="" class="" />
                <div class="text-overlay">Hairs</div>

            </div>

            <div class="grid-item">
                <img src={images.image11} alt="" class="" />
                <div class="text-overlay">Bags</div>

            </div>

        </div>






    )
}

export default HeroSection