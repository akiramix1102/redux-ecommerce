import React, { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Banner from '../Banner-Promotion/banner_new_in'
import Item from './Item'
import Subcribe from '../Subscribe'
import Footer from '../Footer'
import cartStyles from './Cart.module.scss'
import  './Cart.module.scss'



function WishList() {

    const dispatch=useDispatch();

    const listProduct = useSelector(state => state.wishList);

    console.log(listProduct);

    return (
        <>
            <Banner />
            {
                (listProduct.length>0) ?
                    (
                        <Container>
                            <Row style={{margin:'100px 0'}}>
                                <Col md={12}>
                                <h2 style={{textAlign:"center"}}>Your Wish List</h2>
                                    <Table responsive className={cartStyles["table"]}>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <Item products={listProduct}  />
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>

                        </Container>
                    ) 
                    :
                    (
                        <Container>
                            <Row className="align-items-center">
                                <Col md={12} style={{margin:'100px 0',textAlign:'center'}}>
                                <h2 style={{color:"#666666"}}>Oop! Your wish list is empty</h2>
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

export default WishList;