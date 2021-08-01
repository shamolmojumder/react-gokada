import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
const Header = () => {
    return (
        <div>
            <div data-aos="zoom-in" data-aos-delay="1050" data-aos-duration="4000" data-aos-offset="200">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto justify-content-end">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div data-aos="flip-left">
                <h1>Header</h1>
            </div>
        </div>
    );
};

export default Header;