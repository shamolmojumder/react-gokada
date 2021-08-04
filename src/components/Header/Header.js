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
                        <Navbar.Brand><Link className={styles.login} to='/'>Gokada</Link></Navbar.Brand>
                        <Nav className="ms-auto">
                            <Nav.Link ><Link className={styles.login} to='/home'>Home</Link></Nav.Link>
                            <Nav.Link><Link className={styles.login} to='/book'>Book</Link></Nav.Link>
                            <Nav.Link><Link className={styles.login} to='/support'>Support</Link></Nav.Link>
                            <Nav.Link><Link className={styles.login} to='/login'>Login</Link></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;