import React from 'react'
import classes from './Filter.module.css'
import Button from '../../layout/Button'


interface FilterDivProps {
    name: string,
    category: string | undefined
}

const sizes = [
    { name: 'S', category: undefined },
    { name: 'M', category: undefined },
    { name: 'L', category: undefined },
    { name: 'XL', category: undefined }]

const categories = [
    {
        name: 'T-shirt',
        category: 'tee'
    },
    {
        name: 'Shirt',
        category: 'shirt'
    },
    {
        name: 'Jackets',
        category: 'jacket'
    },
    {
        name: 'Hoodies',
        category: 'hoodie'
    },
    {
        name: 'Jeans',
        category: 'jeans'
    }
]

const filterOption = (props: FilterDivProps) => {
    return (
        <div className={classes['filter-check']}>
            <p>{props.name}</p>
            <input type='checkbox' name={props.category ? (props.category) : (props.name)} />
        </div>
    )
}
const Filter = () => {
    return (
        <form>
            <div className={classes['filters-container']}>
                <div className={classes['filters-category']}>
                    <p className={classes['filters-header']}>Sizes</p>
                    {categories.map((size, index) => (
                        <div key={index}>
                            {filterOption(size)}
                        </div>
                    ))}
                </div>
                <div className={classes['filters-category']}>
                    <p className={classes['filters-header']}>Sizes</p>
                    {sizes.map((size, index) => (
                        <div key={index}>
                            {filterOption(size)}
                        </div>
                    ))}
                </div>
                <Button disabled={false} type='submit' text='Filter' onClick={() => console.log('Hello')} width={90} height={50} />
            </div>
        </form>
    )
}

export default Filter