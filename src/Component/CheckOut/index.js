import React from 'react';
import Banner from '../Banner-Promotion/banner_new_in'
import Bill from './Bill'
import Order from './Order'
import { Container, Row } from 'react-bootstrap';


function index() {
    return (
        <>
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