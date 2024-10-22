import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartCountSlice';
import images from '../assets/Image';
import "../MainContent/ProductDetails.css"


const products = [
  { id: 1, name: "Butt Gummies", price: "₦12,999.00", img: images.image25 },
  { id: 2, name: "Butt/Hips Enlargement Pills", price: "₦6,999.00", img: images.image15 },
  { id: 3, name: "Weight Gain Sirop", price: "₦12,999.00", img: images.image16 },
  { id: 4, name: "Butt/Hips Enlargement Oil", price: "₦12,999.00", img: images.image17 },
  { id: 5, name: "Weight Gain Pills", price: "₦6,999.00", img: images.image18 },
  { id: 6, name: "Weight Gain Mini-set", price: "₦18,999.00", img: images.image19 },
  { id: 7, name: "Weight Gain Full-set", price: "₦37,999.00", img: images.image20 },
  { id: 8, name: "Breast Enhancement Pills", price: "₦17,999.00", img: images.image21 },
  { id: 9, name: "Flat Tummy Tea", price: "₦8,999.00", img: images.image22 },
  { id: 10, name: "Butt/Hips Enlargement Cream", price: "₦10,999.00", img: images.image23 },
  { id: 11, name: "Butt/Hips Enlargement Cream", price: "₦10,999.00", img: images.image24 },
  { id: 12, name: "Butt/Hips Enlargement Set", price: "₦47,999.00", img: images.image14 },

  { id: 13, name: "Slim Tea", price: "₦9,999.00", img: images.image26 },
  { id: 14, name: "Curve Booster", price: "₦15,999.00", img: images.image27 },
  { id: 15, name: "Fat Burning Cream", price: "₦9,999.00", img: images.image28 },
  { id: 16, name: "Slim Thick Full-set", price: "₦74,499.00", img: images.image29 },
  { id: 17, name: "Student Budget Set", price: "₦29,999.00", img: images.image45 },
  { id: 18, name: "Butt/Hips Enlargement Pro-set", price: "₦54,999.00", img: images.image31 },
  { id: 19, name: "Tummy Wrap", price: "₦14,999.00", img: images.image32 },
  { id: 20, name: "Boss Lady-set", price: "₦89,999.00", img: images.image33 },
  { id: 21, name: "Weight Gain Powder", price: "₦6,499.00", img: images.image34 },
  // { id: 22, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image35 },
  { id: 23, name: "Breast Enhancement Powder", price: "₦6,499.00", img: images.image36 },
  // { id: 24, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image37 },
  { id: 25, name: "Butt/Hips Enlargement Powder", price: "₦6,499.00", img: images.image38 },
  { id: 26, name: "Breast Enhancement Full-set", price: "₦56,999.00", img: images.image39 },
  { id: 27, name: "Breast Enhancement Mini-set", price: "₦35,999.00", img: images.image40 },
  // { id: 28, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image41 },
  { id: 29, name: "Slim Thick Mini-set", price: "₦49,999.00", img: images.image42 },
  // { id: 30, name: "Breast Enhancement Oil", price: "₦89.99", img: images.image43 },
  { id: 31, name: "Breast Enhancement Syrup", price: "₦11,499.00", img: images.image44 },

]

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find(prod => prod.id === parseInt(id));

  if (!product) return <div>Product not found!</div>;

  const addToCart = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
    }));
  };

  return (
    <>
      <div className='product-details'>
        <img src={product.img} alt={product.name} className='photo' />
        <div className='aura'>
          <h3 className='nameee'>{product.name}</h3>
          <p className='priceee'>{product.price}</p>
          {/* <p>{product.description}</p> */}
          <div className='mantra'>
            <button className='lemo' onClick={addToCart}>Add to Cart</button>
             <button className='lemo'>Buy Now</button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails