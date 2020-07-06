import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Item from './Item'
function Items({Min,Max}) {
    return (
        <Col md={9} className="wrapper-products">
            <Row>
                <Item Min={Min} Max={Max}/>
            </Row>
        </Col>
    );
}

export default Items;