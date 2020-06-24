import React from 'react';
import {Link} from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'
function Banner_new_in() {
    return (
        <section className="new-in">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="new-in__wrapper">
                            <div className="new-in__wrapper-text">
                                <h1>new in trends</h1>
                                <h3>Hurry Up !
                                    <br />
                                    Exclusive To You
                                </h3>
                                <Link to="" className="btn-shop-now">
                                    Shop now
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner_new_in;