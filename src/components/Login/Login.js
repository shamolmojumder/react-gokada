import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
const Login = () => {
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig); 
    }
    const googleSignInBtn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(error);
  });
    }
    return (
        <div>
           <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button>Button</Button>
                <Button onClick={googleSignInBtn} variant="danger">Signin with Google</Button>
            </Form> 
        </div>
    );
};

export default Login;