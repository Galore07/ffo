import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/Image';
import "./HandBags.css"


const products = [
  { id: 71, name: "CHARES", price: "₦20,000.00", img: images.image55 },
  { id: 72, name: "DK", price: "₦28,000.00", img: images.image48 },
  { id: 73, name: "FENDI", price: "₦27,000.00", img: images.image50 },
  { id: 74, name: "OWAMBE PURSE", price: "₦22,000.00", img: images.image46 },
  { id: 75, name: "FENDACE", price: "₦38,000.00", img: images.image47 },
  { id: 76, name: "DK", price: "₦28,000.00", img: images.image51 },
  { id: 77, name: "DK", price: "₦26,000.00", img: images.image49 },
  { id: 78, name: "FENDACE", price: "₦38,000.00", img: images.image64 },
  { id: 79, name: "LOUIS VUITTON", price: "₦33,000.00", img: images.image52 },
  { id: 80, name: "LOUIS VUITTON", price: "₦28,000.00", img: images.image62 },
  { id: 83, name: "FENDI", price: "₦30,000.00", img: images.image58 },
  { id: 84, name: "FENDI", price: "₦30,000.00", img: images.image61 },
  { id: 86, name: "FENDACE", price: "₦48,000.00", img: images.image59 },
  { id: 87, name: "FENDACE", price: "₦48,000.00", img: images.image65 },
  { id: 88, name: "FENDACE", price: "₦48,000.00", img: images.image63 },
  { id: 89, name: "FENDACE", price: "₦48,000.00", img: images.image54 },
  { id: 90, name: "FENDACE", price: "₦41,000.00", img: images.image53 },
];

const HandBags = () => {
  return (
    <>
      <div className='logoss'>

      <img src={images.image66} alt="" className='love'/>

        <img src={images.image69} alt="" className='love'/>

        <img src={images.image67} alt="" className='love'/>

        <img src={images.image70} alt="" className='love'/>

        <img src={images.image68} alt="" className='love'/>

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

export default HandBags