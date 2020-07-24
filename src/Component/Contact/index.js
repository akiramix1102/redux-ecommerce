import React, { useEffect } from "react";
import Banner from "../Banner-Promotion/banner_new_in";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./Form";
import ContactInfo from "./ContactInfo";
import Footer from '../Footer'
import Helmet from 'react-helmet';

function Contact() {

    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>

            <Banner />
            <Container>
                <Row className="contact">
                    <Form />
                    <ContactInfo />


                    <Col xs={12}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159080.41884707494!2d0.04730892714892946!3d51.46492103768748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c20c4df35b%3A0xe4edbd779c7c2896!2sNEWMARKET!5e0!3m2!1svi!2s!4v1594201849466!5m2!1svi!2s"
                            aria-hidden="false"
                        />
                    </Col>
                </Row>
            </Container>
            <Footer/>

        </>

    );
}

export default Contact;
