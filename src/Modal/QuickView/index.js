import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg, faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons'

function ModalView(props) {

    const { show, product, hide } = props;
    const [valueQuantity, setValueQuantity] = useState(1)
    const [size, setSize] = useState('S')

    const dispatch=useDispatch();

    const onHideModal = () => {
        hide();
    }
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

    const onAddToCartWithOption = (id,size,valueQuantity) => {
        dispatch({
            type:'ADD_TO_CART_WITH_OPTION',
            id,
            size,
            valueQuantity
        })
    }
    return (
        <>
            <Modal show={show}
                onHide={onHideModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body className="product-selected row">
                    <div className="product-selected__img col-md-6">
                        <img src={product.images} alt={product.name} className="img-fluid" />
                    </div>
                    <div className="product-selected__wrapper-info col-md-6">
                        <h3 className="heading-title">{product.title}</h3>
                        <ul className="rating">
                            <li>
                                {showRating(product.rating)}
                            </li>
                        </ul>
                        <h4 className="price">
                            &#36;{product.price}
                            <del className="price__old">&#36;{product.oldprice}</del>
                        </h4>
                        <p className="des">{product.description}</p>
                        <div className="category">
                            <p>Category:<span>&nbsp;{product.category}</span> </p>
                        </div>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    {
                                        (product.hasOwnProperty('sizes')) ? 'Choose Size' : 'Choose Color'
                                    }
                                </Form.Label>
                                <Form.Control as="select" value={size} onChange={handeChangeSize}>
                                    {showSelection(product)}
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
                        <Modal.Footer>
                            <Button variant="success" onClick={() => onAddToCartWithOption(product.id,size,valueQuantity)}>
                                Add To Cart
                            </Button>
                            <Button variant="danger" onClick={() => onHideModal(show)}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </div>
                </Modal.Body>



            </Modal>
        </>
    );
}

export default ModalView;
