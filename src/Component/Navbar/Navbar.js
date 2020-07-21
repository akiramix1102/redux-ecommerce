import React, { useState, useEffect } from 'react';
import { Row, Navbar, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import logo from '../../imgs/logo2.png'
import { useSelector } from 'react-redux';
import './navbar.scss'
import Login from '../../Modal/Login/Login';
import SignUp from '../../Modal/SignUp/SignUp';
import firebase from '../../firebase'
function Navbar1() {

    const [showFormSignIn, setShowFormSignIn] = useState(false)
    const [showFormSignUp, setShowFormSignUp] = useState(false)
    // const [name, setName] = useState('')
    const addItems = useSelector(state => state.addItems)

    const numberQuantity = useSelector(state => state.addItems.reduce((acc, cur) => {
        return acc + cur.quantity
    }, 0))

    const onShowFormSignIn = () => {
        setShowFormSignIn(!showFormSignIn)
        setShowFormSignUp(false)
    }

    const onHide = () => {
        setShowFormSignIn(false)
        setShowFormSignUp(false)
    }

    const onShowFormSignUp = () => {
        setShowFormSignUp(!showFormSignUp)
        setShowFormSignIn(false)
    }

    // useEffect(() => {
    //     setName(JSON.parse(localStorage.getItem('name')));
    // }, [firebase.getCurrentUsername()])


    console.log(firebase.getCurrentUsername());

    const signOut=()=>{
        firebase.logout();
    }

    return (
        <>
            <Row>
                <Navbar bg="light" expand="lg" className="menu">
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto wrap-menu menu-left">
                            <Nav.Link as={Link} to="/" className="menu-item">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products" className="menu-item menu-item--sub">Products
                            </Nav.Link>
                            <Nav.Link as={Link} to="/blog" className="menu-item">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="menu-item">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="menu-item">Contact Us</Nav.Link>
                        </Nav>
                        <ul className="menu-right d-flex">
                            {
                                (firebase.getCurrentUsername())
                                    ?
                                    ''
                                    :
                                    <li className="menu-right__item menu-right__item--submenu">
                                        <Link to=""><FontAwesomeIcon icon={faUserPlus} /></Link>
                                        <ul className="sub-menu">
                                            <li onClick={onShowFormSignIn}>Sign In</li>
                                            <li onClick={onShowFormSignUp}>Sign Up</li>
                                        </ul>
                                    </li>
                            }

                            {
                                (firebase.getCurrentUsername())
                                    ?
                                    <li className="menu-right__item">
                                        <FontAwesomeIcon icon={faUserCircle} /> <span className="user-name">Hi,{firebase.getCurrentUsername()}</span>
                                        <ul>
                                            <li onClick={signOut}>Sign Out</li>
                                        </ul>
                                    </li>
                                    :
                                    ''
                            }

                            <li className="menu-right__item">
                                <Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
                            </li>



                            <li className="menu-right__item">
                                <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                                <span className={addItems.length ? 'number-quantity' : 'hide'}>{addItems ? numberQuantity : ''}</span>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
            <Login show={showFormSignIn} hide={onHide} showForm={onShowFormSignUp} />
            <SignUp show={showFormSignUp} hide={onHide} showForm={onShowFormSignIn} />
        </>
    );
}

export default Navbar1;