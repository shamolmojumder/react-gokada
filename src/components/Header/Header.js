import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
const Header = () => {
    return (
        <div>
            <div data-aos="zoom-in" data-aos-delay="1050" data-aos-duration="4000" data-aos-offset="200">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Gokada</Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Destination</Nav.Link>
                            <Nav.Link href="#features">Destination</Nav.Link>
                            <Nav.Link>
                            <Link className={styles.login} to='/login'>Login</Link>
                            </Nav.Link>
                            
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