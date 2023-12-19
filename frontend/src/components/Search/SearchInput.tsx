import React from 'react'
import classes from './Search.module.css'
import Button from '../../layout/Button'

const SearchInput = () => {
    return (
        <div className={classes['search-input-container']}>
            <input placeholder='Search' className={classes['search-input']} />
            <Button text='Search' onClick={() => console.log('xd')} type='submit' disabled={false} width={100} height={55} />
        </div>
    )
}

export default SearchInput