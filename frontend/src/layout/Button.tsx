import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
    text: string
    onClick: Function | undefined
    type: "submit" | "reset" | "button"
    disabled: true | false
    width: number
    height: number
};

const Button = (props: ButtonProps) => {
    return (
        <button style={{ width: `${props.width}%`, height: `${props.height}px` }} className={classes['button']} type={props.type} onClick={() => props.onClick} disabled={props.disabled} >{props.text}</button>
    );
};

export default Button;