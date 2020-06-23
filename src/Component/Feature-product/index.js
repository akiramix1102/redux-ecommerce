import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureItem from '../Feature-product-item/index'
function Feture() {
    return (
        <section>
            <Container className="feature-products">
                <Row>
                    <Col xs={12} className="feature-products__title text-center">
                        <span className="title-orange">feature</span>
                        <span className="title-blue">&nbsp; product</span>
                    </Col>
                </Row>
                <FeatureItem />

            </Container>
        </section>
    );
}

export default Feture;