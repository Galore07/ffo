import React from 'react'
import { Link } from 'react-router-dom';
import images from '../assets/Image';



const products = [
    { id: 81, name: "Suction Sit-up bar", price: "₦18,500.00", img: images.image56 },
    { id: 82, name: "Flat tummy Ab-wheel roller", price: "₦15,000.00", img: images.image57 },
]

const Featured = () => {
    return (
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
    );
};

export default Featured