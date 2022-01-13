import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './event';
import Club from './club';
import firebase, {auth}  from './firebase';
import { map } from 'async';
import { render } from '@testing-library/react';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

function Login(){
const emailRef= useRef(null);

const [email, setEmail] = useState(null);

console.log(email);

 const [data, setData]=useState({
    eName:"",
    eDate:"",
    eLocation:"",
    eDesc:"",
    eTime:"",
  });

  const[data2,setData2]=useState({
    cName:"",
    cDesc:"",
    cSocials:"",
    cWebsite:"",
  })

  const actionCodeSettings = {
      url:'localhost:3000'
  }
  

  /*useEffect(()=>
  {
      if(auth.isSignInWithEmailLink(window.location.href && !!email)){
          auth.SignInWithEmailLink(email, window.location.href);
      }

    },[]); */

  
    const signIn=
      async () => {
          console.log("reached");
          setEmail(emailRef.current.value);
    // If the user is re-entering their email address but already has a code
    if (auth.isSignInWithEmailLink(window.location.href) && !!email) {
      // Sign the user in
      auth.signInWithEmailLink(email, window.location.href)
      .catch((err) => {
        console.log(err);
        
      });
    } 
    else {
       
      auth
        .sendSignInLinkToEmail(email, {
          url: "http://localhost:3000",
          handleCodeInApp: true,
        })
        .then( ()=>{
            if(auth.isSignInWithEmailLink(window.location.href && !!email)){
                auth.SignInWithEmailLink(email, window.location.href);
            }
        })
        
        .catch((err) => {
            console.log(err);
            console.log(email+" debug")
            
          });
    }
  };
  
  function statusCheck(){
    if(auth.isSignInWithEmailLink(window.location.href && !!email)){
        auth.SignInWithEmailLink(email, window.location.href);
    }

  }



  return(

  <form acton="">
      <input ref={emailRef} type="email"></input>
      <button type="button" onClick={signIn}>Login</button>
      <button type="button" onClick={statusCheck}>chech status</button>
  </form>

  )
}

export default Login;