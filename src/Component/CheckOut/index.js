import React from 'react';
import Banner from '../Banner-Promotion/banner_new_in'
import Bill from './Bill'
import Order from './Order'
import { Container, Row } from 'react-bootstrap';
import Helmet from 'react-helmet';

function index() {
    return (
        <>
        <Helmet>
            <title>Check Out</title>
        </Helmet>
            <Banner />
            <section className="checkout">
                <Container>
                    <Row>
                        <Bill />
                        <Order />
                    </Row>
                </Container>
            </section>

        </>
    );
}

export default index;