import React from 'react'
import "../Component/Middle.css"

const Middle = () => {
    return (
        <center>
            <div class="featured-products">
                <div>Featured Products</div>
                <div className='look'>
                    <button class="see">New Arrival</button>
                    <button class="see">Best Selling</button>
                    <button class="see">Check Reviews</button>
                </div>
            </div>
        </center>
    )
}

export default Middle