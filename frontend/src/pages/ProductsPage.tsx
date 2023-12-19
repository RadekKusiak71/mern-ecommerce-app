import React, { useCallback, useEffect, useState } from 'react'
import classes from './ProductsPage.module.css'
import SearchInput from '../components/Search/SearchInput'
import Filter from '../components/Filter/Filter'
import clothifyLogo from '../assets/images/clothify_logo.svg'
import Product from '../components/Product/Product'

interface ProductProps {
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

const ProductsPage = () => {


    const [products, setProducts] = useState([])

    const fetchProducts = useCallback(async () => {
        try {
            let response = await fetch('http://127.0.0.1:8000/api/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let data = await response.json()

            if (response.ok) {
                setProducts(data)
            }

        } catch (err) {
            console.log(err)
        }
    }, [setProducts])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <div className={classes['products-container']}>
            <div className={classes['filtering-components']}>
                <SearchInput />
                <Filter />
                <img src={clothifyLogo} alt='clothify' className={classes['clothify-logo-search']} />
            </div>
            <div className={classes['products']}>
                {products.map((product: ProductProps, index) => (
                    <Product
                        key={product._id}
                        name={product.name}
                        id={product._id}
                        sizes={product.sizes}
                        productImage={product.productImage}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsPage