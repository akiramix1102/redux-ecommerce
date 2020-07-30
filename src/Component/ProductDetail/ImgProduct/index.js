import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function ProductImg(props) {

    const product=props.products;
    // const [img,setImg]=useState(product[0].title)
   
    
    const handleClick=e=>{
        console.log(e.currentTarget.src);
        
    }

    return (
        <Col lg={6} className="product-img">
            <Row className="align-items-center">
                <Col lg={3} md={6} className="product-img__small">
                    {product.map(item => {
                        return (
                            item.smallImg.map((img, index) => <img src={img} key={index} onClick={e=>handleClick(e)} className="img-fluid mb-3" />)
                        )
                    })}
                </Col>
                <Col lg={9} md={6} className="product-img__large">
                    {product.map(item => <img src={item.images} className="img-fluid" key={1}/>)}
                </Col>
            </Row>
        </Col>
    );
}

export default ProductImg;