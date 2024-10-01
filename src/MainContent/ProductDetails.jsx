import React from 'react';
import { useParams } from 'react-router';
import images from '../assets/Image';
import "../MainContent/ProductDetails.css"


const products = [
  { id: 1, name: "BBL Set", price: "₦47,000.00", img: images.image25 },
  { id: 2, name: "Butt/Hips Enlargement Pills", price: "₦6,500.00", img: images.image15 },
  { id: 3, name: "Weight Gain Sirop", price: "₦12,500.00", img: images.image16 },
  { id: 4, name: "Butt/Hips Enlargement Pills", price: "₦6,500.00", img: images.image17 },
  { id: 5, name: "Butt/Hips Enlargement Powder", price: "₦6,000.00", img: images.image18 },
  { id: 6, name: "Curve Booster Sirop", price: "₦15,000.00", img: images.image19 },
  { id: 7, name: "Breast Enhancement Cream", price: "₦10,500.00", img: images.image20 },
  { id: 8, name: "Breast Enhancement Oil", price: "₦11,500.00", img: images.image21 },
  { id: 9, name: "Breast Enhancement Pills", price: "₦17,500.00", img: images.image22 },
  { id: 10, name: "Breast Enhancement Sirop", price: "₦12,000.00", img: images.image23 },
  { id: 11, name: "Breast Enhancement Powder", price: "₦6,000.00", img: images.image24 },
  { id: 12, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image14 },

  { id: 13, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image26 },
  { id: 14, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image27 },
  { id: 15, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image28 },
  { id: 16, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image29 },
  { id: 17, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image45 },
  { id: 18, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image31 },
  { id: 19, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image32 },
  { id: 20, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image33 },
  { id: 21, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image34 },
  { id: 22, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image35 },
  { id: 23, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image36 },
  { id: 24, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image37 },
  { id: 25, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image38 },
  { id: 26, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image39 },
  { id: 27, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image40 },
  { id: 28, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image41 },
  { id: 29, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image42 },
  { id: 30, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image43 },
  { id: 31, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image44 },
]

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(prod => prod.id === parseInt(id));

  if (!product) return <div>Product not found!</div>;

  return (
    <>
      <div className='product-details'>
        <img src={product.img} alt={product.name} className='photo' />
        <div className='aura'>
          <h3 className='nameee'>{product.name}</h3>
          <p className='priceee'>{product.price}</p>
          {/* <p>{product.description}</p> */}
          <div className='mantra'>
            <input type="number" className='number' />
            <button className='eptic'>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails