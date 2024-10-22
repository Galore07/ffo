import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart, decrementQuantity, incrementQuantity } from '../redux/cartCountSlice';   // import actions
import { RiDeleteBin5Line } from "react-icons/ri";
import "../Component/Cart.css"



const Cart = ({ onClose }) => {
    const cartItems = useSelector(state => state.cartCount.items);
    const totalQuantity = useSelector(state => state.cartCount.totalQuantity);
    const dispatch = useDispatch();

    const handleCheckout = () => {
        alert("Proceeding to Checkout");
        dispatch(clearCart());  // clear the cart after checkout
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    if (cartItems.length === 0) return <div>Your cart is empty.</div>

    return (
        <div className='cart-modal'>
            <div className='set'>
                <h2>Your Cart</h2>
                <button className='close-modal' onClick={onClose}>X</button>
            </div>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id} className='cart-item'>
                        <div className='item-image-name'>
                            <img src={item.img} alt={item.name} style={{ width: "50px", height: "70px" }} />
                            <div className='item-info'>
                                <div className='neat'>{item.name}</div>
                                <div className='detty'>{item.price}</div>
                            </div>
                        </div>
                        <div className='make'>
                            <button className='mat' onClick={() => dispatch(decrementQuantity({ id: item.id }))}>-</button>
                            <span>Quantity: {item.quantity}</span>
                            <button className='mat' onClick={() => dispatch(incrementQuantity({ id: item.id }))}>+</button>
                        </div>

                        <button onClick={() => dispatch(removeItem({ id: item.id }))}><RiDeleteBin5Line className='waste' /></button>
                    </li>
                ))}
            </ul>
            <div>Total Items: {totalQuantity}</div>
            <div>Total Price: ₦{calculateTotalPrice()}</div>
            <button className='out' onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default Cart;