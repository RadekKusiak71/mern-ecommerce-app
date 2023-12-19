import React from 'react'
import classes from './HomeWelcome.module.css'
import clothifyLogo from '../../assets/images/clothify_logo.svg'
import LinkButton from '../LinkButton'

const HomeWelcome = () => {
    return (
        <div className={classes['welcome-container']}>
            <img src={clothifyLogo} alt='clothify' className={classes['welcome-logo']} />
            <p>Buy your favourites<br /> clothes</p>
            <hr />
            <div>
                <LinkButton text='Categories' width={250} height={65} path='#home-categories' />
                <LinkButton text='Products' width={250} height={65} path='products' />
            </div>
        </div>
    )
}

export default HomeWelcome