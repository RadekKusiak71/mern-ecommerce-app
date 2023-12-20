import React, { useContext } from 'react';
import classes from './CartPage.module.css';
import CartContext from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext)!;

    const calculateFullPrice = () => {
        if (!cart || cart.length === 0) {
            return 0;
        }

        let totalPrice = 0;

        cart.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });

        return totalPrice;
    };

    const fullPrice = calculateFullPrice();

    return (
        <div className={classes.container}>
            {cart?.length ? (
                <>
                    <h2>Your Cart</h2>
                    {cart.map((item: any) => (
                        <div className={classes['cart-item']} key={item.id}>
                            <img src={`http://127.0.0.1:8000/static/images/${item.productImage}`} alt="Product" />
                            <div className={classes['cart-item-info']}>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price * item.quantity}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Size: {item.size}</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
                        </div>
                    ))}
                    <div className={classes['cart-total']}>
                        <p>Total: ${fullPrice}</p>
                    </div>
                </>
            ) : (
                <h2>Cart is empty</h2>
            )}
        </div>
    );
};

export default CartPage;
