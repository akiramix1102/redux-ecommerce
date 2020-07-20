import React from 'react';
import { Modal,Button,Form, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './login.scss'
import { useState } from 'react';
function Login({ show, hide,showForm }) {

    const [email, setEmail] = useState('')
    const [passWord, setPassWord] =useState ('')

    const onHideModal = () => {
        hide();
    }
    const onSubmit = e => {
        e.preventDefault();
    }
    const onShowForm=()=>{
        showForm();
    }

    return (
        <>
            <Modal show={show}
                onHide={onHideModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton />
                <Modal.Body className="login row justify-content-center">
                    <Col xs={12} className="text-center login__icon">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </Col>
                    <Col xs={12} className="text-center login__heading">
                        <h3>Sign In</h3></Col>
                    <Form onSubmit={e => onSubmit(e)} className="login__form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={passWord} onChange={e=>setPassWord(e.target.value)} placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button type="submit" className="sign-in">
                            Sign In
                        </Button>
                        <span>Or</span>
                        <Button variant="danger" type="cancel" onClick={onShowForm}>
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login;