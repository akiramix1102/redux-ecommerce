import React from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap'
import TShirt from './TShirt'
import Jean from './Jean'
import Short from './Short/Short';
import Glass from './Glass/Glass';
import Bag from './Bag/Bag'
import Shirt from './Shirt'
import Trouser from './Trousers'
import { Link } from 'react-router-dom';
import Product from '../Products/Products'

function index() {
    return (
        <>
            <section className="products-all">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="products-all__wrapper">
                                <Tabs defaultActiveKey="T-Shirt" id="uncontrolled-tab-example" className="wrapper-left">
                                    <Tab eventKey="T-Shirt" title="T-Shirt" data-category="t-shirt" className="block-category">
                                        <TShirt />
                                    </Tab>
                                    <Tab eventKey="Jean" title="Jean" className="block-category">
                                        <Jean />
                                    </Tab>
                                    <Tab eventKey="Short" title="Short" className="block-category">
                                        <Short />
                                    </Tab>
                                    <Tab eventKey="Shirt" title="Shirt" className="block-category">
                                        <Shirt/>
                                    </Tab>
                                    <Tab eventKey="Trouser" title="Trouser" className="block-category">
                                        <Trouser/>
                                    </Tab>
                                    <Tab eventKey="Glass" title="Glass" className="block-category">
                                        <Glass/>
                                    </Tab>
                                    <Tab eventKey="Bag" title="Bag" className="block-category">
                                        <Bag/>
                                    </Tab>

                                    <Tab  className="menu-item" eventKey="All" title="Show All Product">
                                        <Link to="/products" />
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