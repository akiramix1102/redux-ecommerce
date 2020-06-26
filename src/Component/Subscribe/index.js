import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';

function Subscribe() {

    const [value,setValue]=useState('')

    const onChangeSubscribe =(e)=>{
        setValue(e.target.value)
    }
    return (
        <section className="subscribe">
            <Container>
                <Row>
                    <Col md={5} className="subscribe__text">
                        <h2>GET OUR NEWSLETTERS</h2>
                    </Col>
                    <Col md={7} className="subscribe__input">
                        <form action="">
                        <input type="text" placeholder="Enter your email" value={value} onChange={(e)=>onChangeSubscribe(e)}/>
                        <button>Subscribe</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Subscribe;