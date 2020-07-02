import React from 'react';
import { Row, Navbar, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../imgs/logo2.png'
import { useSelector } from 'react-redux';
function Navbar1() {

    const addItems = useSelector(state => state.addItems)

    const numberQuantity = useSelector(state => state.addItems.reduce((acc, cur) => {
        return acc + cur.quantity
    }, 0))
    
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
                            <li className="menu-right__item">
                                <Link to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
                            </li>
                            <li className="menu-right__item">
                                <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                                <span className={addItems.length?'number-quantity':'hide'}>{addItems ? numberQuantity : ''}</span>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        </>
    );
}

export default Navbar1;