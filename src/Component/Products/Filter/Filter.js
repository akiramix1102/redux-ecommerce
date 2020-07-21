import React from 'react';
import { Col } from 'react-bootstrap';
import Category from './Category/Category';
import ShirtSize from './Size/Shirt_Size';
import JeanSize from './Size/Jean_Size';
import Price from './Price/Price';

function Filter({min_max}) {
    const onGetData = (a, b) => {
        min_max(a,b)
    }
    return (
        <Col lg={3} className="filter">

            <Category />

            <Price getData={onGetData} />

            <ShirtSize />

            <JeanSize />


        </Col>
    );
}

export default Filter;