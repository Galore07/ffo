import React from 'react';
import images from '../assets/Image';
import { Link } from 'react-router-dom';



const products = [
  { id: 71, name: "CHARES", price: "₦20,000.00", img: images.image55 },
  { id: 72, name: "DK", price: "₦28,000.00", img: images.image48 },
  { id: 73, name: "FENDI", price: "₦27,000.00", img: images.image50 },
  { id: 74, name: "OWAMBE PURSE", price: "₦22,000.00", img: images.image46 },
  { id: 75, name: "FENDACE", price: "₦38,000.00", img: images.image47 },
  { id: 76, name: "DK", price: "₦28,000.00", img: images.image51 },
  { id: 77, name: "DK", price: "₦26,000.00", img: images.image49 },
  { id: 78, name: "FENDACE", price: "₦38,000.00", img: images.image64 },
];

const Bags = () => {
  return (

    <>
      <div className="line-container">
        <hr className="line" />
        <h1 className="bgs"><i> <Link to="/hand-bags">HAND BAGS</Link> </i></h1>
        <hr className="line" />
      </div>
      <div className='ecommerce-grid'>
        {products.map(product => (
          <div className='grid-boxes' key={product.id}>
            <Link to={`/product-info/${product.id}`}>
              <img src={product.img} alt={product.name} />
              <div className='product-info'>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bags