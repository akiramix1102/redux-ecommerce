import React, { useState } from 'react';
import Slider from "react-slick";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg, faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'
import ModalView from '../../Modal/QuickView';

function FeatureItem() {

    const dispatch = useDispatch();

    const settings = {
        dots: false,
        infinite: true,
        autoplay:false,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,

        
    };
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])

    const listProducts = useSelector(state => {
        return (
            state.items.filter(item => item.feature === true)
        )
    })
    
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
    const onHide =()=>{
        setShow(!show)
    }

    const addToCart = id => {
        dispatch({
            type: 'ADD_TO_CART',
            id
        })
    }

    const addToWishlist=id=>{
        dispatch({
            type:'ADD_TO_WISH_LIST',
            id
        })
    }

    const listItems = listProducts.map(product => {
        return (

            <Row className="feature-products__wrapper" key={product.id}>
                <Col md={4} className="feature-image">
                    <img src={product.images} alt={product.title} className="img-fluid" />
                </Col>
                <Col md={8} className="feature-info">
                    <h3 className="heading-title">{product.title}</h3>
                    <ul className="rating">
                        <li>
                            {showRating(product.rating)}
                        </li>
                    </ul>
                    <h4 className="price">
                        &#36;{product.price}.00
                        <del className="price__old">&#36;{product.oldprice}.00</del>
                    </h4>
                    <p className="des">{product.description}</p>
                    <div className="feature-action">
                    <a className="btn-buy" onClick={() => addToCart(product.id)}>Add to cart</a>
                        <div className="feature-icon">
                            <a onClick={() => showModalView(product)}><FontAwesomeIcon icon={faEye} /></a>
                            <a onClick={()=>addToWishlist(product.id)}><FontAwesomeIcon icon={faHeartReg} /></a>
                        </div>
                    </div>
                </Col>
            </Row>

        )
    })

    return (
        <>
            <Slider {...settings}>
                {listItems}
            </Slider>
            <ModalView product={data} show={show} hide={onHide}/>
        </>
    );
}

export default FeatureItem;