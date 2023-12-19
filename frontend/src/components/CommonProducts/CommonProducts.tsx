import React, { useState, useEffect, useCallback } from 'react'
import classes from './CommonProducts.module.css'
import Product from '../Product/Product'

interface CommonProductState {
    _id: string
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

const CommonProducts = ({ category, prodId }: { category: string, prodId: string }) => {
    const [products, setProducts] = useState<CommonProductState[] | []>()

    const fetchCategoryProducts = useCallback(async () => {
        try {
            let response = await fetch(`http://127.0.0.1:8000/api/products/category/${category}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let data = await response.json()

            if (response.ok) {
                data = data.filter((el: any) => el._id !== prodId)
                setProducts(data)
            }

        } catch (err) {
            console.log(err)
        }
    }, [category, prodId, setProducts])


    useEffect(() => {
        fetchCategoryProducts()
    }, [fetchCategoryProducts])

    return (
        <div className={classes['common-container']}>
            {products && (
                products.map(product => (
                    <Product
                        key={product._id}
                        name={product.name}
                        id={product._id}
                        sizes={product.sizes}
                        productImage={product.productImage}
                        price={product.price}
                    />
                ))
            )}
        </div>
    )
}

export default CommonProducts