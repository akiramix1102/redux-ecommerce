import React from 'react';
import cartStyles from '../Cart.module.scss'

function index({ products, total }) {
    return (
        <>
            {
                products.map((product, index) => {
                    return (
                        <tr className={cartStyles["product"]} key={index}>
                            <td>{index+1}</td>
                            <td className={cartStyles["product__img"]}> 
                                <img
                                    src={product.images}
                                    alt={product.title}
                                    style={{ height: "100px" }} />
                            </td>
                            <td className={cartStyles["product__title"]}>{product.title}</td>
                            <td>${product.price}</td>
                            <td className={cartStyles["product__quantity"]}>
                                <button className={cartStyles["increase"]}>-</button>
                                <input type="text" value={product.quantity} />
                                <button className={cartStyles["decrease"]}>+</button>
                            </td>
                            <td className={cartStyles["product__total"]}>${`${product.quantity}` * `${product.price}`}</td>
                        </tr>
                    )
                })
            }
        </>
    );
}

export default index;