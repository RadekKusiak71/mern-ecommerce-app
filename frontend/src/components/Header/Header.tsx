import React from 'react'
import classes from './Header.module.css'
import clothifyLogo from '../../assets/images/clothify_logo.svg'
import Menu from '../Header/Menu'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classes['header']}>
            <>
                <Link to='/'>
                    <img src={clothifyLogo} alt='clothify' className={classes['logo']} />
                </Link>
                <Menu />
            </>
        </header>
    );
};

export default Header;