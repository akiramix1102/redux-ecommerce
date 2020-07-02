import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { category } from '../../../../Constant'
import categoryStyles from './Category.module.scss'
function Category() {

    
    return (
        <div className={categoryStyles["category"]}>
            <h4>Categories</h4>
            <ul>
                <li>
                    <Link to="/products" >All</Link>
                </li>
                {category.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/products/${item}`} >{item}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>

    );
}

export default Category;