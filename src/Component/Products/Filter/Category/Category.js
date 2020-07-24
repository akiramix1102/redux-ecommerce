import React from 'react';
import { Link } from 'react-router-dom'
import { category } from '../../../../Constant'
import categoryStyles from './Category.module.scss'
function Category() {
    
    return (
        <div className={categoryStyles["category"]}>
            <h4>Categories</h4>
            <ul>
            <Link to="/products" >
                            <li >
                                All
                            </li>
                        </Link>
                {category.map((item, index) => {
                    return (
                        <Link to={`/products/${item}`} >
                            <li key={index}>
                                {item}
                            </li>
                        </Link>
                        // <li key={index}>
                        //     <Link to={`/products/${item}`} >{item}</Link>
                        // </li>
                    )
                })}
            </ul>
        </div>

    );
}

export default Category;