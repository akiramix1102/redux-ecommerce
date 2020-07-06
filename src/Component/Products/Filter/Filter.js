import React from 'react';
import { Col, Accordion, Button, Form } from 'react-bootstrap';
import Category from './Category/Category';
import ShirtSize from './Size/Shirt_Size';
import JeanSize from './Size/Jean_Size';
import Color from './Color/Color';
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


            {/* <div className="color">
                <Accordion defaultActiveKey="1" >
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Color
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Color />
                    </Accordion.Collapse>
                </Accordion>
            </div> */}

        </Col>
    );
}

export default Filter;