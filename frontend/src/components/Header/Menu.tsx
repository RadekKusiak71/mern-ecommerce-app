import React from 'react'
import classes from './Menu.module.css'
import { Link } from 'react-router-dom'
import LinkButton from '../../layout/LinkButton'
import CartButton from '../Cart/CartButton'

const Menu = () => {
    return (
        <nav className={classes['menu']}>
            <Link className={classes['menu-link']} to='/'>Home</Link>
            <Link className={classes['menu-link']} to='/'>Categories</Link>
            <Link className={classes['menu-link']} to='/products'>Products</Link>
            <LinkButton text='Login' width={100} height={40} path='login' />
            <CartButton />
        </nav>
    )
}

export default Menu