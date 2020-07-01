import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Item from './Item'
import Sort from '../../Products/Item/Sort';
function Items() {
    return (
        <Col md={9} className="wrapper-products">
            <Row>
                <Sort/>
            </Row>
            <Row>
                <Item/>
            </Row>
        </Col>
    );
}

export default Items;