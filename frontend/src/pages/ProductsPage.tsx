import React, { useCallback, useEffect, useState } from 'react'
import classes from './ProductsPage.module.css'
import SearchInput from '../components/Search/SearchInput'
import Filter from '../components/Filter/Filter'
import clothifyLogo from '../assets/images/clothify_logo.svg'
import Product from '../components/Product/Product'
import { useLocation } from 'react-router-dom'

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
    const { search } = useLocation()

    const fetchFilters = useCallback(async (decodedParams: string[]) => {
        try {
            let response = await fetch('http://127.0.0.1:8000/api/products/query/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ params: decodedParams })
            })
            let data = await response.json()
            if (response.ok) {
                setProducts(data)
            }

        } catch (err) {
            console.log(err)
        }
    }, [setProducts])

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

    const fetchProductsByQuery = useCallback(async (query: string) => {
        try {
            let response = await fetch(`http://127.0.0.1:8000/api/products/search/${query}`, {
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
        if (search) {
            let decodedParams: string[] = []
            let prs = new URLSearchParams(search)
            prs.forEach((value, key) => {
                decodedParams.push(key)
            });
            fetchFilters(decodedParams)
        } else {
            fetchProducts()
        }
    }, [fetchProducts, fetchFilters, search])

    return (
        <div className={classes['products-container']}>
            <div className={classes['filtering-components']}>
                <SearchInput fetchProductsByQuery={fetchProductsByQuery} />
                <Filter />
                <img src={clothifyLogo} alt='clothify' className={classes['clothify-logo-search']} />
            </div>
            <div className={classes['products']}>
                {products ? (
                    products.map((product: ProductProps, index) => (
                        <Product
                            key={product._id}
                            name={product.name}
                            id={product._id}
                            sizes={product.sizes}
                            productImage={product.productImage}
                            price={product.price}
                        />
                    ))
                ) : (
                    <h1>No products found</h1>
                )}
            </div>
        </div>
    )
}

export default ProductsPage