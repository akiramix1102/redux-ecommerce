import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg, faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'
import { Col } from 'react-bootstrap'
import Pagination from '../../Pagination'
import '../../Products/Item/Item.scss'
function Item() {
    const listProducts = useSelector(state=>{
        return(
            state.items.filter(item=>item.category==='jean')
        )
    })

    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(9);

    const paginate = (number) => {
        setCurrentPage(number);
    };



    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProduct = listProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const dispatch = useDispatch();

    // const [image,setImage]=useState('')


    // render star rating
    const showRating = rating => {
        let result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<FontAwesomeIcon style={{ color: "#fdba2d" }} icon={faStar} key={i} />)
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<FontAwesomeIcon style={{ color: "#fdba2d" }} icon={faStarReg} key={i} />)
        }
        return result;
    }
    const addToCart = id => {
        dispatch({
            type: 'ADD_TO_CART',
            id
        })
    }

    const onMouseOver = (e, product) => {
        // e.currentTarget.src=product.smallImg[0];

    }

    return (
        <>
            {currentProduct.map(product => {
                return (
                    <Col md={4} className="text-center" key={product.id}>
                        <div className="wrapper-product">
                            <Link to="" className="wrapper-product__img">
                                <img src={product.images} alt={product.title} className="img-fluid" onMouseOver={(e) => onMouseOver(e, product)} />
                            </Link>
                            <div className="wrapper-product__info">
                                <div className="wrapper-product__info-text">
                                    <Link to="" className="title">
                                        {product.title}
                                    </Link>
                                    <ul className="rating">
                                        <li>
                                            {showRating(product.rating)}
                                        </li>
                                    </ul>
                                    <h4 className="price">
                                        &#36;{product.price}.00
                                    <del className="price__old">&#36;{product.oldprice}.00</del>
                                    </h4>
                                </div>
                                <div className="wrapper-product__info-action">
                                    <a className="btn-buy" onClick={() => addToCart(product.id)}>Add to cart</a>
                                    <div className="feature-icon">
                                        <a><FontAwesomeIcon icon={faHeartReg} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            })}

            <Col md={12}>
                <Pagination
                    productPerPage={productPerPage}
                    totalProduct={listProducts.length}
                    paginate={paginate}
                />
            </Col>
        </>
    );
}

export default Item;