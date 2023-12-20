import React from 'react'
import classes from './CategoriesLayout.module.css'
import tee from '../../assets/categories/beige_tee 4.svg'
import jacket from '../../assets/categories/black_jacket 1.svg'
import shirt from '../../assets/categories/black_shirt 1.svg'
import hoodie from '../../assets/categories/hoodie_brown 1.svg'
import jeans from '../../assets/categories/darkblue_jeans 1.svg'
import LinkButton from '../LinkButton'

const categories = [
    { category: 'tee', text: 'T-shirts', image: tee },
    { category: 'shirt', text: 'Shirts', image: shirt },
    { category: 'hoodie', text: 'Hoodies', image: hoodie },
    { category: 'jeans', text: 'Jeans', image: jeans },
    { category: 'jacket', text: 'Jackets', image: jacket },
]

interface categoryBoxProps {
    category: string,
    text: string,
    image: string
}

const categoryBox = (props: categoryBoxProps) => {
    return (
        <div className={classes['home-category']}>
            <img src={props.image} alt={props.text} className={classes['home-category-image']} />
            <LinkButton path={`products?${props.category}=on`} text={props.text} width={300} height={60} />
        </div>
    )
}


const CategoriesLayout = () => {
    return (
        <div id='home-categories'>
            <p className={classes['home-category-font']}>Categories</p>
            <div className={classes['categories-container']}>
                {categories.map((category, index) => (
                    <div key={index}>
                        {categoryBox(category)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoriesLayout