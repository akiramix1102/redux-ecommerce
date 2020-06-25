import React from 'react';
import {  Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg, faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'

function index(props) {

    const { number, products, productSelect } = props;

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

    const showModalView = product => {
        productSelect(product)
    }

    return (
        <>
            {
                products.slice(0, number)
                    .map(product => {
                        return (
                            <Col md={4} className="text-center" key={product.id}>
                                <div className="wrapper-product">
                                    <Link to="" className="wrapper-product__img">
                                        <img src={product.images} alt={product.title} className="img-fluid" />
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
                                            <a className="btn-buy">Add to cart</a>
                                            <div className="feature-icon">
                                                <a onClick={() => showModalView(product)}><FontAwesomeIcon icon={faEye} /></a>
                                                <a><FontAwesomeIcon icon={faHeartReg} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
            }
        </>
    );
}

export default index;