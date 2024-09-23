import React from 'react'
import "../Container/Footer.css"
import images from '../assets/Image'

const Footer = () => {
  return (
    <footer class="footer">

      <div class="grid-container">

        <div class="grid-box">
          <div class="meu">COMPANY</div>
          <div>About</div>
          <div>Contact</div>
          <div>Shop</div>
        </div>

        <div class="grid-box">
          <img src={images.image5} alt="" />
          <h3>ForeverFaith</h3>
        </div>

        <div class="grid-box">

          <div> Send a review</div>
          <div>
            <input type="text" class='one' />
            <button class='galore'>Submit</button>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer