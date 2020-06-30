import React from 'react';
import cartStyles from '../Cart.module.scss'
import { useDispatch } from 'react-redux';

function Item({ products }) {

    const dispatch = useDispatch();

    const handleIncrease = id => {
        dispatch({
            type: 'SUB_QUANTITY',
            id
        })
    }

    const handleDecrease = id => {
        dispatch({
            type:'ADD_QUANTITY',
            id
        })
    }

    return (
        <>
            {
                products.map((product, index) => {
                    return (
                        <tr className={cartStyles["product"]} key={index}>
                            <td>{index + 1}</td>
                            <td className={cartStyles["product__img"]}>
                                <img
                                    src={product.images}
                                    alt={product.title}
                                    style={{ height: "100px" }} />
                            </td>
                            <td className={cartStyles["product__title"]}>{product.title}</td>
                            <td>${product.price}</td>
                            <td className={cartStyles["product__quantity"]}>
                                <button className={cartStyles["increase"]} onClick={() => handleIncrease(product.id)}>-</button>
                                <input type="text" value={product.quantity} />
                                <button className={cartStyles["decrease"]} onClick={() => handleDecrease(product.id)}>+</button>
                            </td>
                            <td className={cartStyles["product__total"]}>${`${product.quantity}` * `${product.price}`}</td>
                        </tr>
                    )
                })
            }
        </>
    );
}

export default Item;