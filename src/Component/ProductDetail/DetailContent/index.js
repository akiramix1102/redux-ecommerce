import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg, faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'
import './content.scss'
function Content(props) {

    const dispatch = useDispatch();
    const product = props.products;

    const [valueQuantity, setValueQuantity] = useState(1)
    const [size, setSize] = useState('S')


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

    const showSelection = product => {
        let result;
        if (product.hasOwnProperty('sizes')) {
            result = product.sizes.map(size => <option key={size} value={size}>{size}</option>)
        }
        if (product.hasOwnProperty('color')) {
            result = product.color.map(item => <option key={item} value={item}>{item}</option>)
        }
        return result;
    }

    const onChangeQuantity = (e) => {
        setValueQuantity(e.target.value)
    }
    const quantityUp = () => {
        setValueQuantity(valueQuantity + 1)
    }
    const quantityDown = () => {
        setValueQuantity(valueQuantity - 1)
        if (valueQuantity <= 0) {
            setValueQuantity(0)
        }
    }
    const handeChangeSize = e => {
        setSize(e.target.value)
    }

    const onAddToCartWithOption = (id, size, valueQuantity) => {
        dispatch({
            type: 'ADD_TO_CART_WITH_OPTION',
            id,
            size,
            valueQuantity
        })
    }

    const addToWishlist=id=>{
        dispatch({
            type:'ADD_TO_WISH_LIST',
            id
        })
    }

    return (
        <>
            {
                product.map(item => {
                    return (
                        <Col lg={6} className="info" key={item.id}>
                            <h3>{item.title}</h3>
                            <ul className="info__rating">
                                <li>
                                    {showRating(item.rating)}
                                </li>
                            </ul>
                            <h4 className="info__price">
                                &#36;{item.price}.00
                                <del className="info__price-old">&#36;{item.oldprice}.00</del>
                            </h4>
                            <p className="info__des">
                                {item.description}
                            </p>
                            <p className="info__cate">Category:<span>&nbsp;{item.category}</span> </p>
                            <Form>
                                <Form.Group>
                                    <Form.Label>
                                        {
                                            (item.hasOwnProperty('sizes')) ? 'Choose Size' : 'Choose Color'
                                        }
                                    </Form.Label>
                                    <Form.Control as="select" value={size} onChange={handeChangeSize}>
                                        {showSelection(item)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="quantity">
                                    <Form.Label className="label-quantity">Quantity</Form.Label>
                                    <input type="number" min={0} value={valueQuantity} onChange={e => onChangeQuantity(e)} />
                                    <div className="quantity-nav">
                                        <div className="quantity-button quantity-up" onClick={quantityUp}>+</div>
                                        <div className="quantity-button quantity-down" onClick={quantityDown}>-</div>
                                    </div>
                                </Form.Group>
                            </Form>
                            <a className="btn-buy" onClick={() => onAddToCartWithOption(item.id, size, valueQuantity)}>
                                Add To Cart
                            </a>
                            <a className="btn-wishlist" onClick={()=>addToWishlist(product.id)}>
                                Add To Withlist
                            </a>
                        </Col>
                    )
                })
            }
        </>
    );
}

export default Content;