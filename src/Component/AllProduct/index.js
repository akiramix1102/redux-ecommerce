import React from 'react';
import { Link } from 'react-router-dom'
import { Tabs, Tab, Container, Row, Col, Nav } from 'react-bootstrap'
import TShirt from './TShirt'
import Jean from './Jean'
import Short from './Short/Short';
import Glass from './Glass/Glass';
import Bag from './Bag/Bag'
function index() {
    return (
        <>
            <section className="products-all">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="products-all__wrapper">
                                <Tabs defaultActiveKey="TShirt" id="uncontrolled-tab-example" className="wrapper-left">
                                    <Tab eventKey="TShirt" title="T Shirt" className="block-category">
                                        <TShirt />
                                    </Tab>
                                    <Tab eventKey="Jean" title="Jean" className="block-category">
                                        <Jean />
                                    </Tab>
                                    <Tab eventKey="Short" title="Short" className="block-category">
                                        <Short />
                                    </Tab>
                                    <Tab eventKey="Glass" title="Glass" className="block-category">
                                        <Glass/>
                                    </Tab>
                                    <Tab eventKey="Bag" title="Bag" className="block-category">
                                        <Bag/>
                                    </Tab>
                                    <Tab href="/products" className="menu-item" eventKey="All" title="Show All Product">

                                    </Tab>
                                </Tabs>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default index;