import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LinkButton.module.css'

interface LinkProps {
    text: string
    path: string
    width: number
    height: number
};

const LinkButton = (props: LinkProps) => {
    return (
        <Link className={classes['link-button']} to={`/${props.path}`} style={{ width: `${props.width}px`, height: `${props.height}px` }
        }>
            {props.text}
        </Link >
    )
};

export default LinkButton;