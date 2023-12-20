import React from 'react'
import classes from './Menu.module.css'
import { Link } from 'react-router-dom'
import CartButton from '../Cart/CartButton'

const Menu = () => {
    return (
        <nav className={classes['menu']}>
            <Link className={classes['menu-link']} to='/'>Home</Link>
            <Link className={classes['menu-link']} to='/'>Categories</Link>
            <Link className={classes['menu-link']} to='/products'>Products</Link>
            <CartButton />
        </nav>
    )
}

export default Menu