import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
    text: string
    onClick: any
    type: "submit" | "reset" | "button"
    disabled: true | false
    width: number
    height: number
};

const Button = (props: ButtonProps) => {
    return (
        <button
            type={props.type}
            style={{ width: `${props.width}%`, height: `${props.height}px` }}
            className={classes['button']}
            onClick={props.onClick}
            disabled={props.disabled} >
            {props.text}
        </button>
    );
};

export default Button;