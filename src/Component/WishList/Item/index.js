import React from 'react';
import cartStyles from '../Cart.module.scss'
import '../Cart.module.scss'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

function Item({ products }) {

    const dispatch = useDispatch();

    const onAddToCart = id => {
        dispatch({
            type:'ADD_TO_CART',
            id
        })
    }

    const onDeleteProduct = (e, id, string) => {
        e.preventDefault();
        dispatch({
            type: 'REMOVE_ITEM',
            string: 'wishList',
            id
        })
    }

    return (
        <>

            {
                products.map((product, index) => {
                    return (
                        <tr className={cartStyles["product"]} key={index}>
                            <td><button onClick={(e) => onDeleteProduct(e, product.id)} style={{ backgroundColor: 'transparent', border: 'none' }}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                            <td>{index + 1}</td>
                            <td className={cartStyles["product__img"]}>
                                <img
                                    src={product.images}
                                    alt={product.title}
                                    style={{ height: "100px" }} />
                            </td>
                            <td className={cartStyles["product__title"]}>{product.title}</td>
                            <td>${product.price}</td>
                            <td><button
                            style={{
                                border:'1px solid #ccc',
                                backgroundColor:'#4595da',
                                color:'#fff',
                                padding:'5px 10px'
                                
                            }}
                            onClick={(e) => onAddToCart(product.id)}>ADD TO CART</button></td>
                        </tr>
                    )
                })
            }
        </>
    );
}

export default Item;