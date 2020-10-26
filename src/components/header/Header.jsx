import React from 'react';
import { HeaderWrapper } from './HeaderStyle';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Row>
                    <Col>
                        <Navbar expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Item>
                                        <Nav.Link href="#">Products</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link  href="#" eventKey="link-1">Brands</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link  href="#" eventKey="link-2">Deals</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link  href="#" eventKey="link-2">Services</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Nav className="justify-content-end" activeKey="/home">
                                    <Nav.Item>
                                    <Nav.Link href="#">Account</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link href="#" eventKey="link-1">Recently reviewed</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link href="/order-status" eventKey="link-2">Order Status</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link  href="#" eventKey="link-2">Saved Items</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col> 
                </Row>
            </Container>
        </HeaderWrapper>
    )
};

export default Header;