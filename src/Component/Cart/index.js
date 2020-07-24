import React, { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { Container, Row, Col, Table } from 'react-bootstrap';

import Banner from '../Banner-Promotion/banner_new_in'
import Item from './Item'
import Subcribe from '../Subscribe'
import Footer from '../Footer'
import cartStyles from './Cart.module.scss'
import  './Cart.module.scss'
import bag from '../../imgs/blue_shoppictbasket_1484336511-1.png'


function Cart() {

    const history=useHistory();

    const dispatch=useDispatch();

    const listProduct = useSelector(state => state.addItems);
    const total = useSelector(state => state.total)
    const discount=useSelector(state=>state.discount)
    
    const [coupon, setCoupon] = useState('')

    const handleClearCart=()=>{
        dispatch({
            type:'CLEAR_CART'
        })
    }

    const checkOut=()=>{
        history.replace('/checkout')
    }

    const handleApplyCoupon=(e)=>{
        e.preventDefault()
        dispatch({
            type:'ADD_COUPON',
            coupon
        })
    }

    return (
        <>
            <Banner />
            {
                (listProduct.length > 0) ?
                    (
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <Table responsive className={cartStyles["table"]}>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>#</th>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <Item products={listProduct} total={total} />
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row className={cartStyles["coupon"]}>
                                <Col md={5} className={cartStyles["coupon__action"]}>
                                    <form action="">
                                        <input type="text"
                                            value={coupon}
                                            placeholder="Coupon code"
                                            onChange={e => setCoupon(e.target.value)}
                                        />
                                        <button onClick={e=>handleApplyCoupon(e)}>apply coupon</button>
                                    </form>
                                </Col>
                                <Col md={3} className={cartStyles["clear"]}>
                                    <button onClick={handleClearCart}>Clear shopping cart</button>
                                </Col>
                            </Row>
                            <Row className={cartStyles["total"]}>
                                <Col md={5}>
                                    <div className={cartStyles["total__inner"]}>
                                        <h4>Cart Total</h4>
                                        <ul>
                                            <li>Subtotal <span>${total+discount}</span></li>
                                            <li>Discount <span>-${discount}</span></li>
                                            <li>Total <span>${total}</span></li>
                                        </ul>
                                    </div>
                                    <button onClick={checkOut}>Checkout now</button>
                                </Col>
                            </Row>
                        </Container>
                    ) :
                    (
                        <Container>
                            <Row className="align-items-center">
                                <Col md={5}>
                                    <img src={bag} alt="bag empty" class="img-fluid"/>
                                </Col>
                                <Col md={7}>
                                <h2 style={{color:"#666666"}}>Oop! Your bag is empty</h2>
                                <Link to="/" class={cartStyles["backtohome"]}>Continue shopping</Link>
                                </Col>
                            </Row>
                        </Container>
                    )
            }
            <Subcribe/>
            <Footer/>
        </>
    );
}

export default Cart;