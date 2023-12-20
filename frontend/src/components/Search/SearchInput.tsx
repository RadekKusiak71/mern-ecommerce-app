import React, { ChangeEvent, useState } from 'react'
import classes from './Search.module.css'
import Button from '../../layout/Button'

const SearchInput = ({ fetchProductsByQuery }: { fetchProductsByQuery: Function }) => {
    const [query, setQuery] = useState<string>('')

    const handleQueryInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        console.log(e.target.value)
    }
    const handleSearchSubmit = () => {
        console.log('xd')
        fetchProductsByQuery(query)
        setQuery('')
    }
    return (
        <div className={classes['search-input-container']}>
            <input onChange={handleQueryInput} placeholder='Search' className={classes['search-input']} value={query} />
            <Button text='Search' onClick={handleSearchSubmit} type='button' disabled={false} width={100} height={55} />
        </div>
    )
}

export default SearchInput