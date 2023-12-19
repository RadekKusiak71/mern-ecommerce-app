import React from 'react'
import classes from './Card.module.css'

const Card = ({ children }: { children: React.JSX.Element }) => {
    return (
        <div className={classes['card']}>{children}</div>
    )
}

export default Card