import React from 'react'
import classes from './CartButton.module.css'
import cartIcon from '../../assets/icons/cart_icon.svg'
import { Link } from 'react-router-dom'

const CartButton = () => {
    return (
        <Link to='/cart' className={classes['cart-button']}>
            <img src={cartIcon} alt='cart' />
        </Link>
    )
}

export default CartButton