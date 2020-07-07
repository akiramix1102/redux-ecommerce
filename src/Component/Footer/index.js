import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../imgs/logo2.png";
import payment from '../../imgs/footer/1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneVolume,faEnvelope,faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import './footer.scss'
function index() {
    return (
        <section className="footer">
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <img src={logo} alt="logo" className="img-fluid mb-3" />
                        <p className="footer__text">
                            Nam liber tempor cum soluta nobis eleif- end option congue nihil
                            impdiet doming id quod mazim placerat
            </p>
                    </Col>
                    <Col lg={2} md={6}>
                        <h4 className="footer__title">Information</h4>
                        <ul className="footer__menu">
                            <li>My Acount</li>
                            <li>Order History</li>
                            <li>Wish List</li>
                            <li>Newsletter</li>
                            <li>Privacy Policy</li>
                            <li>Delivery Info</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="footer__title">Information</h4>
                        <ul className="footer__menu">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Product</li>
                            <li>Wish List</li>
                            <li>Check Out</li>
                            <li>Cart</li>
                        </ul>
                    </Col>
                    <Col lg={3}md={6}>
                        <h4 className="footer__title">Payment Type</h4>
                        <img src={payment} alt="payment" className="img-fluid mb-3"/>
                        <h4 className="footer__title">Contact Us </h4>
                        <ul className="footer__menu-last">
                            <li><FontAwesomeIcon icon={faPhoneVolume}/>+003 (1234) 7894</li>
                            <li><FontAwesomeIcon icon={faEnvelope}/>youremail@gmail.com</li>
                            <li><FontAwesomeIcon icon={faLocationArrow}/>New Market , London</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default index;
