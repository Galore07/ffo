import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartCountSlice';
import images from '../assets/Image';


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

const ProductInfos = () => {
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

export default ProductInfos