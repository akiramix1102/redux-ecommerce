import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

function Banner_new_in() {

    return (
        <section className="new-in">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="new-in__wrapper">

                            <div className="new-in__wrapper-text">

                                <ScrollAnimation animateIn="animate__fadeInLeft">
                                    <h1>new in trends</h1>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn="animate__fadeInRight">
                                    <h3>Hurry Up !
                                    <br />
                                    Exclusive To You
                                    </h3>
                                </ScrollAnimation>

                                <ScrollAnimation animateIn="animate__fadeInUp">
                                <Link to="" className="btn-shop-now">
                                    Shop now
                                </Link>
                                </ScrollAnimation>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner_new_in;