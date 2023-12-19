import React, { useState, useEffect, useCallback } from 'react'
import classes from './ProductPage.module.css'
import { useParams } from 'react-router-dom'
import Button from '../layout/Button'
import CommonProducts from '../components/CommonProducts/CommonProducts'

interface Product {
    _id: string
    name: string
    description: string
    category: string
    productImage: string
    price: number
    sizes: {
        [key: string]: number;
    }
}

const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)


    const fetchProduct = useCallback(async () => {
        try {
            let response = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let data = await response.json()

            if (response.ok) {
                setProduct(data)
            }

        } catch (err) {
            console.log(err)
        }
    }, [id, setProduct])

    const handleSizeChange = (size: string) => {
        setSelectedSize(size);
    };

    useEffect(() => {
        fetchProduct();
    }, [id, fetchProduct]);

    return (
        <div className={classes['product-page']}>
            <div className={classes['product-info']}>
                {product && (
                    <>
                        <img className={classes['product-image']} src={`http://127.0.0.1:8000/static/images/${product.productImage}`} alt={product.name} />
                        <div className={classes['product-data']}>
                            <p className={classes['product-title']}>
                                {product.name} - {product.price}$
                            </p>
                            <p className={classes['product-description']}>
                                {product.description}
                            </p>
                            <fieldset>
                                <legend>Select Size:</legend>
                                {Object.keys(product.sizes).map((size) => (
                                    <div key={size}>
                                        <input
                                            type="radio"
                                            id={size}
                                            name="size"
                                            value={size}
                                            checked={selectedSize === size}
                                            onChange={() => handleSizeChange(size)}
                                            disabled={product.sizes[size] === 0}
                                        />
                                        <label>{size}</label>
                                    </div>
                                ))}
                            </fieldset>
                            <Button type='button' text='Add to cart' disabled={false} onClick={() => console.log('Add to cart')} height={60} width={100} />
                        </div>
                    </>

                )}
            </div>
            <div className={classes['common-products']}>
                <p className={classes['common-products-title']}>More like this</p>
                {product && (
                    <CommonProducts category={product.category} prodId={product._id} />
                )}
            </div>
        </div>
    )
}

export default ProductPage