import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import style from './Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  const  [loggedInUser, setLoggedInUser] =  useContext(UserContext);
  const [avatar,setAvtar]=useState({
    name:'',
    email:'',
    password:'',
    success:false
  });
  const [newUser,setNewUser]=useState(false)
  let history = useHistory();
  let location = useLocation();
  
  let { from } = location.state || { from: { pathname: "/" } };
  
  const[signInuUser,setSignInUser] =useState({});

    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig); 
    }
    const googleSignInBtn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
      // /** @type {firebase.auth.OAuthCredential} */
      // var credential = result.credential;

      // // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      setSignInUser(user);
      setLoggedInUser(user)
      history.replace(from);
      // ...
      console.log(user.displayName,user.email,user.photoURL);
    }).catch((error) => {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // // The email of the user's account used.
      // var email = error.email;
      // // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // // ...
        console.log(error);
        setSignInUser(error);
        });
      }
    const handleBlur=(e)=>{
      let isFieldValid=true;
      if(e.target.name==="email"){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }if (e.target.name==="password") {
        isFieldValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
      }if (isFieldValid) {
        const newUserInfo={...avatar};
        newUserInfo[e.target.name]=e.target.value;
        newUserInfo.success=true;
        setAvtar(newUserInfo);
        setLoggedInUser(newUserInfo);
      }
    

    }
    const handleSubmit =(e)=>{
      if (newUser && avatar.email && avatar.password) {
        firebase.auth().createUserWithEmailAndPassword(avatar.email, avatar.password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          console.log(user);
          // const newUserInfo={...avatar};
          // new
          setAvtar(user)
          // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
          });
        console.log("handlesubmited");
        console.log(loggedInUser);
      }
      if (!newUser && avatar.email && avatar.password) {
        firebase.auth().signInWithEmailAndPassword(avatar.email, avatar.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
          setSignInUser(user)
          setLoggedInUser(user)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
      }
      e.preventDefault()
    }
    return (
        <div>
         <input onClick={()=>setNewUser(!newUser)} type="checkbox" name="newUser" id="" />
            <label htmlFor="newUser">New User</label>
            <br />
           <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" required/>
                </Form.Group>
               {
                 newUser ? <input className={style.submitInput} type="submit" value="Sign Up" />:<input className={style.submitInput} type="submit" value="Sign in" />
               }
                <br />
            </Form> 

           
            <Button data-aos="fade-left" onClick={googleSignInBtn} variant="danger">Signin with Google</Button>
  
            <h1>Name:{signInuUser.displayName} </h1>
            <h1>Name:{signInuUser.email} </h1>
            <img src={signInuUser.photoURL} alt="" />
            {
                signInuUser.email &&   
                <Alert data-aos="fade-left"
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


