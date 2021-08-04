import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'

const Login = () => {
    const[signInuUser,setSignInUser] =useState({})
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
    setSignInUser(user)
    // ...
    console.log(user.displayName,user.email,user.photoURL);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log(errorMessage);
    setSignInUser(errorMessage)
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
                <Button data-aos="fade-left" onClick={googleSignInBtn} variant="danger">Signin with Google</Button>
            </Form> 
            <h1>Name:{signInuUser.displayName} </h1>
            <h1>Name:{signInuUser.email} </h1>
            <img src={signInuUser.photoURL} alt="" />
         {
             signInuUser.email &&   <Alert data-aos="fade-left"
             data-aos-anchor="#example-anchor"
             data-aos-offset="500"
             data-aos-duration="500" variant='success '>
             account loggedin successfully
           </Alert>
         }
     
            
        </div>
    );
};

export default Login;