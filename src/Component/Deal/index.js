import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item'

function index() {

    return (
        <section className="deal">
            <Container>
                <Row>
                    <Col className="text-center deal__heading">
                        <span className="deal__heading-orange">DEAL OF</span>
                        <span className="deal__heading-blue">&nbsp;THE DAY</span>
                    </Col>
                </Row>
                <Row>
                <Item />
                </Row>
                
            </Container>
        </section>
    );
}

export default index;