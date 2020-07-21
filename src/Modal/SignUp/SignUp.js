import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import firebase from '../../firebase'
import { useHistory } from 'react-router-dom';
function SignUp({ show, hide, showForm }) {

  

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')

    const onHideModal = () => {
        hide();
    }

    const onSubmit = e => {
        e.preventDefault();
    }
    const onShowForm = () => {
        showForm();
    }

    const signUp = () => {
        try {
            firebase.register(name, email, passWord)
        } catch (error) {
            alert(error.message)
        }
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
                        <h3>Sign Up</h3></Col>
                    <Form onSubmit={e => onSubmit(e)} className="login__form">
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={passWord} onChange={e => setPassWord(e.target.value)} placeholder="Password" />
                        </Form.Group>


                        <Button type="submit" variant="danger" onClick={signUp} className="sign-up">
                            Sign Up
                        </Button>
                        <span>Or</span>
                        <Button className="sign-in" onClick={onShowForm}>
                            Sign In
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );

}

export default SignUp;