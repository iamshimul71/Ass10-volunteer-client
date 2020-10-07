import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import logo from '../../images/logo.png'
import google from '../../images/google.png'
import './Login.css'
import { Button } from 'react-bootstrap';




const Login = () => {
    const [loggedInUser,setLoggedinUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    

    if(firebase.apps.length===0)
    {
        firebase.initializeApp(firebaseConfig)
    }
    
    
    const handleSignIn= ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
           const {displayName,email} = result.user;
           const SignInUser = {name: displayName,email}
           setLoggedinUser(SignInUser)
           history.replace(from)
        
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
    return (
        <div>
            <div>
            <img className="img-size w-25 mb-4" src={logo} alt=""/>
            </div>
          <div className="login-size w-50">
              
             <img className="google " src={google} alt=""/>
             <button className="btnstyle" onClick={handleSignIn}> Continue with google</button>
          </div>
    
        </div>
    );
};

export default Login;