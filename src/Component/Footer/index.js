import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTelegram,faGoogle,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

function index() {
    return (
        <section className="footer">
            <Container>
                <Row>
                    <Col md={4} className="footer__location">
                        <h4 className="footer__location-title text-center">
                            LOCATION
                            </h4>
                        <span>20 Dương Quảng Hàm – Cầu Giấy – Hà Nội</span>
                        <span>242 Thái Hà – Đống Đa – Hà Nội</span>
                        <span>63 Đại Cổ Việt – Hai Bà Trưng – Hà Nội</span>
                        <span>16 Kim Mã – Ba Đình – Hà Nội</span>
                    </Col>
                    <Col md={4} className="footer__social">
                        <h4 className="footer__social-title text-center">
                            CONNECT WITH US
                        </h4>
                        <Link to="">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link to="">
                            <FontAwesomeIcon icon={faTelegram} />
                        </Link>
                        <Link to="">
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link to="">
                            <FontAwesomeIcon icon={faGoogle} />
                        </Link>
                        <Link to="">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                    </Col>
                    <Col md={4} className="footer__contact ">
                        <h4 className="footer__contact-title text-center">
                            CONTACT
                        </h4>
                        <span>Hotline: 0973 285 886</span>
                        <span>Email:hatdajay.support@gmail.com</span>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default index;