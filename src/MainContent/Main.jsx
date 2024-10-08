import React from 'react';
import { Link } from 'react-router-dom';
import "../MainContent/Main.css";
import images from '../assets/Image';


const products = [
    { id: 1, name: "Butt Gummies", price: "₦12,999.00", img: images.image25 },
    { id: 2, name: "Butt/Hips Enlargement Pills", price: "₦6,999.00", img: images.image15 },
    { id: 3, name: "Weight Gain Sirop", price: "₦12,999.00", img: images.image16 },
    { id: 4, name: "Butt/Hips Enlargement Oil", price: "₦12,999.00", img: images.image17 },
    { id: 5, name: "Weight Gain Pills", price: "₦6,999.00", img: images.image18 },
    { id: 6, name: "Weight Gain Mini-set", price: "₦18,999.00", img: images.image19 },
    { id: 7, name: "Weight Gain Full-set", price: "₦37,999.00", img: images.image20 },
    { id: 8, name: "Breast Enhancement Pills", price: "₦17,999.00", img: images.image21 },
];

const Main = () => {
    return (
        <>
            <div className="line-container">
                <hr className="line" /> 
                <h1 className="bgs"><i> <Link to="/enhancement-products">ENHANCEMENT PRODUCTS</Link> </i></h1>
                <hr className="line" />
            </div>
            <div className='ecommerce-grid'>
                {products.map(product => (
                    <div className='grid-boxes' key={product.id}>
                        <Link to={`/product/${product.id}`}>
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

export default Main

// <div class="ecommerce-grid">
//     <div class="grid-boxes">
//         <img src={images.image25} alt="Product 1" />
//         <div class="product-info">
//             <h3>BBL Set</h3>
//             <p>₦47,000.00</p>
//         </div>
//     </div>
//     <div class="grid-boxes">
//         <img src={images.image15} alt="Product 2" />
//         <div class="product-info">
//             <h3>Butt/Hips Enlargement Pills</h3>
//             <p>₦6,500.00</p>
//         </div>
//     </div>
//     <div class="grid-boxes">
//         <img src={images.image16} alt="Product 3" />
//         <div class="product-info">
//             <h3>Weight Gain Sirop</h3>
//             <p>₦12,500.00</p>
//         </div>
//     </div>
//     <div class="grid-boxes">
//         <img src={images.image17} alt="Product 4" />
//         <div class="product-info">
//             <h3>Butt/Hips Enlargement Pills</h3>
//             <p>₦6,500.00</p>
//         </div>
//     </div>

//     <div class="grid-boxes">
//         <img src={images.image18} alt="Product 5" />
//         <div class="product-info">
//             <h3>Butt/Hips Enlargement Powder</h3>
//             <p>₦6,000.00</p>
//         </div>
//     </div>
//     <div class="grid-boxes">
//         <img src={images.image19} alt="Product 6" />
//         <div class="product-info">
//             <h3>Curve Booster Sirop</h3>
//             <p>₦15,000.00</p>
//         </div>
//     </div>
//     <div class="grid-boxes">
//         <img src={images.image20} alt="Product 7" />
//         <div class="product-info">
//             <h3>Breast Enhancement Cream</h3>
//             <p>₦10,500.00</p>
//         </div>
//     </div>
//     <div class="grid-boxes">
//         <img src={images.image21} alt="Product 8" />
//         <div class="product-info">
//             <h3>Breast Enhancement Oil</h3>
//             <p>₦11,500.00</p>
//         </div>
//     </div>

//     <div class="grid-boxes">
//         <img src={images.image22} alt="Product 9" />
//         <div class="product-info">
//             <h3>Breast Enhancement Pills</h3>
//             <p>₦17,500.00</p>
//         </div>
//     </div>
//     <div class="grid-boxes">
//         <img src={images.image23} alt="Product 10" />
//         <div class="product-info">
//             <h3>Breast Enhancement Sirop</h3>
//             <p>₦12,000.00</p>
//         </div>
//     </div>
//     <div class="grid-boxes">
//         <img src={images.image24} alt="Product 11" />
//         <div class="product-info">
//             <h3>Breast Enhancement Powder</h3>
//             <p>₦6,000.00</p>
//         </div>
//     </div>
//     <div class="grid-boxes">
//         <img src={images.image14} alt="Product 12" />
//         <div class="product-info">
//             <h3>Breast Enhancement Oil</h3>
//             <p>₦89.99</p>
//         </div>
//     </div>
// </div>