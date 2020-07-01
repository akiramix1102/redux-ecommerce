import React from 'react';
import {Col,Form} from 'react-bootstrap'
import './sort.scss'
function Sort() {
    return (
        <Col md={12}>
                    <Form className="form">
                        <Form.Group className="form__sort">
                            <Form.Label>Sort By</Form.Label>
                            <Form.Control as="select">
                                <option>Name A - Z</option>
                                <option>Name Z - A</option>
                                <option>Price Low - High</option>
                                <option>Price High - Low</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="form__show">
                            <Form.Label>Show</Form.Label>
                            <Form.Control as="select">
                                <option>9</option>
                                <option>12</option>
                                <option>15</option>
                                <option>18</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
    );
}

export default Sort;