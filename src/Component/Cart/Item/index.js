import React from 'react';
import cartStyles from '../Cart.module.scss'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

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
            type: 'ADD_QUANTITY',
            id
        })
    }

    const onDeleteProduct = (e,id,price,quantity) => {
        e.preventDefault();
        dispatch({
            type: 'REMOVE_ITEM',
            string:'Cart',
            id,
            price,
            quantity
        })

        
    }

    return (
        <>
            {
                products.map((product, index) => {
                    return (
                        <tr className={cartStyles["product"]} key={index}>

                            <td><button onClick={(e)=>onDeleteProduct(e,product.id,product.price,product.quantity)} style={{ backgroundColor: 'transparent', border: 'none' }}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
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