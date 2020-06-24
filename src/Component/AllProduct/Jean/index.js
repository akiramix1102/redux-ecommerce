import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg, faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'
import ModalView from '../../../Modal/QuickView';

function Jean() {
    const [numberShow, setNumberShow] = useState(6);
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const listProduct = useSelector(state => {
        return (
            state.items.filter(item => item.category === 'jean')
        )
    });

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

    const showMore = () => {
        if (numberShow + 3 <= listProduct.length) {
            setNumberShow(numberShow + 3)
        }
        else {
            setNumberShow(listProduct.length)
        }
    }
    const showModalView = product => {
        setShow(!show);
        setData(product);
    }
    const onHide = () => {
        setShow(!show)
    }

    // Component Item
    const Item = ({ number, products }) => {
        if (products.length === 0) {
            return 'Loading...'
        }
        return products
            .slice(0, number)
            .map(product => {
                return (
                    <Col md={4} className="text-center">
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
                                        &#36;{product.price}
                                        <del className="price__old">&#36;{product.oldprice}</del>
                                    </h4>
                                </div>
                                <div className="wrapper-product__info-action">
                                    <a className="btn-buy">Add to cart</a>
                                    <div className="feature-icon">
                                        <a onClick={() => showModalView(product)}
                                        ><FontAwesomeIcon icon={faEye} /></a>
                                        <a><FontAwesomeIcon icon={faHeartReg} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            })
    }
    return (
        <>
            <Row>
                <Item number={numberShow} products={listProduct} />
            </Row>
            <div className="text-center show-more mt-4">
                <Button variant="outline-warning" onClick={showMore}>
                    Show More
                </Button>
            </div>
            <ModalView product={data} show={show} hide={onHide} />
        </>
    );
}

export default Jean;