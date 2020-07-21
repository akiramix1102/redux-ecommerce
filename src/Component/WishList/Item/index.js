import React from 'react';
import cartStyles from '../Cart.module.scss'
import '../Cart.module.scss'
import { useDispatch } from 'react-redux';

function Item({ products }) {

    const dispatch = useDispatch();



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
                        </tr>
                    )
                })
            }
        </>
    );
}

export default Item;