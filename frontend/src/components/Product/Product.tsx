import React from 'react'
import classes from './Product.module.css'
import Button from '../../layout/Button'
import { Link } from 'react-router-dom'

interface ProductProps {
    id: string
    name: string
    productImage: string
    price: number
    sizes: {
        S: number,
        M: number,
        L: number,
        XL: number
    }
}

const Product = (props: ProductProps) => {
    return (
        <div className={classes['product-container']}>
            <Link to={`/product/${props.id}/`}>
                <img src={`http://127.0.0.1:8000/static/images/${props.productImage}`} className={classes['product-image']} alt={props.name} />
            </Link>
            <div className={classes['product-data']}>
                <p>{props.price}</p>
                <p>{props.name}</p>
                <div className={classes['product-sizes']}>
                    Sizes:
                    <p>S: {props.sizes.S} </p>
                    <p> M: {props.sizes.M} </p>
                    <p> L: {props.sizes.L} </p>
                    <p> XL: {props.sizes.XL} </p>
                </div>
                <Button type='button' text='Add to cart' disabled={false} onClick={() => console.log('Add to cart')} height={40} width={100} />
            </div>
        </div>
    )
}

export default Product