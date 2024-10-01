import React from 'react'
import "../Component/Middle.css"
import { Link } from 'react-router-dom'

const Middle = () => {
    return (
        <center>
            <div className="featured-products">
                <div className='look'>
                    <button className="see">New Arrival</button>
                    
                    <button className="see">
                        <Link to="/featured"> Featured Products </Link>
                    </button>

                    <button className="see">Client Reviews</button>
                    
                </div>
            </div>
        </center>
    );
};

export default Middle