import React from 'react';
import { Container, Row, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Home from '../Home/Home';
import Product from '../Products/Products'

function Menu() {
    return (
        <Router>
            <Container>
                <Row>
                    <Navbar bg="light" expand="lg" className="menu">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={Product}/>
            </Switch>
        </Router>

    );
}

export default Menu;