import React from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1>Name: {loggedInUser.displayName} </h1>
                        <h1>Email: {loggedInUser.email} </h1>
                        <Button onClick={()=>setLoggedInUser({})} variant="danger">Logout</Button>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Profile;