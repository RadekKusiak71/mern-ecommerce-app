import React from 'react'
import classes from './Footer.module.css'
import clothifyLogo from '../../assets/images/clothify_logo.svg';
import { Link } from 'react-router-dom';
import codeIcon from '../../assets/icons/Code.svg'
import gitIcon from '../../assets/icons/GitHub.svg'

const Footer = () => {
    return (
        <footer>
            <Link to='/'>
                <img src={clothifyLogo} alt='clothify' className={classes['footer-logo']} />
            </Link>
            <div>
                <Link to='/'>
                    <img src={codeIcon} alt='clothify' />
                </Link>
                <Link to='/'>
                    <img src={gitIcon} alt='clothify' />
                </Link>
            </div>
        </footer>
    )
}

export default Footer