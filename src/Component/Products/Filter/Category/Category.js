import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { category } from '../../../../Constant'
import categoryStyles from './Category.module.scss'
function Category() {

    const [active,setActive]=useState(false)
    const handleActive =()=>{
        setActive(!active)
    }
    return (
        <div className={categoryStyles["category"]}>
            <h4>Categories</h4>
            <ul>
                <li className={(active)?'active':''} onClick={handleActive}>
                    <Link to="/products" >All</Link>
                </li>
                {category.map((item, index) => {
                    return (
                        <li key={index} onClick={handleActive} className={(active)?'active':''}>
                            <Link to={`/products/${item}`} >{item}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>

    );
}

export default Category;