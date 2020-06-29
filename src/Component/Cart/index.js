import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Banner from '../Banner-Promotion/banner_new_in'
import Item from './Item'
import cartStyles from './Cart.module.scss'

function Cart() {

    const listProduct = useSelector(state => state.addItems);
    const total = useSelector(state => state.total)
    const [coupon, setCoupon] = useState('')
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
                                        <button>apply coupon</button>
                                    </form>
                                </Col>
                                <Col md={3} className={cartStyles["clear"]}>
                                    <button>Clear shopping cart</button>
                                </Col>
                            </Row>
                            <Row className={cartStyles["total"]}>
                                <Col md={5}>
                                    <div className={cartStyles["total__inner"]}>
                                        <h4>Cart Total</h4>
                                        <ul>
                                            <li>Subtotal <span>${total}</span></li>
                                            <li>Total <span>${total}</span></li>
                                        </ul>
                                    </div>
                                    <button>Checkout now</button>
                                </Col>
                            </Row>
                        </Container>
                    ) :
                    (
                        <h3>No thing</h3>
                    )
            }
        </>
    );
}

export default Cart;