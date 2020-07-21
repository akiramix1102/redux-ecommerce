import React from 'react';
import { Col, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Order() {

    const listProduct=useSelector(state=>state.addItems);
    const total=useSelector(state=>state.total);
    
    return (
        <Col md={6} className="checkout__order">
            <h3 className="checkout__order-heading">YOUR ORDER</h3>
            <Table>
                <thead>
                    <tr>
                        <td>PRODUCT</td>
                        <td>TOTAL</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        listProduct.map(product=>{
                            return(
                                <tr key={product.id}>
                                    <td>{product.title} &nbsp;&nbsp;<b>x</b> &nbsp;{product.quantity}</td>
                            <td> {product.price*product.quantity}&nbsp;$</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td >ORDER TOTAL</td>
                        <td style={{color:'#FDBA2D'}}> <h4>{total}&nbsp;$</h4></td>
                    </tr>
                </tbody>
            </Table>
        </Col>
    );
}

export default Order;