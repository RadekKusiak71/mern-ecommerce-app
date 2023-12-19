import React from 'react'
import classes from './CartButton.module.css'
import cartIcon from '../../assets/icons/cart_icon.svg'


const CartButton = () => {
    return (
        <button className={classes['cart-button']}>
            <img src={cartIcon} alt='cart' />
        </button>
    )
}

export default CartButton