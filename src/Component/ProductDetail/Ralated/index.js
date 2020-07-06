import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg, faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'
import ModalView from '../../../Modal/QuickView';
import './ralated.scss'
function Related() {


    const dispatch = useDispatch();
    const { category } = useParams()
    const listProducts = useSelector(state => state.items.filter(item => item.category === category))

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll:3
    };
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])


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
        setShow(!show);
        setData(product);
    }
    const onHide = () => {
        setShow(!show)
    }

    const addToCart = id => {
        dispatch({
            type: 'ADD_TO_CART',
            id
        })
    }

    const listItems = listProducts.map(product => {
        return (

            <Row className="feature-products__wrapper" key={product.id}>
                <Col md={12} className="text-center" key={product.id}>
                    <div className="wrapper-product">
                        <Link to={`/products/${product.category}/${product.id}/${product.title}`} className="wrapper-product__img">
                            <img src={product.images} alt={product.title} className="img-fluid" />
                        </Link>
                        <div className="wrapper-product__info">
                            <div className="wrapper-product__info-text">
                                <Link to={`/products/${product.category}/${product.id}/${product.title}`} className="title">
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
                                    <a onClick={() => showModalView(product)}><FontAwesomeIcon icon={faEye} /></a>
                                    <a><FontAwesomeIcon icon={faHeartReg} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        )
    })


    return (
        <Col lg={12} className="raleted">
            <div className="text-center heading">RALETED <span> PRODUCTS</span> </div>
            <Slider {...settings}>
                {listItems}
            </Slider>
            <ModalView product={data} show={show} hide={onHide} />
        </Col>
    );
}

export default Related;