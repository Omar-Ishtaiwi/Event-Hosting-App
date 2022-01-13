import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './event';
import Club from './club';
import firebase,{auth} from './firebase';
import { map } from 'async';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from  './loginPage'
import { Link } from 'react-router-dom';
function App() {
  const [signed,setSigned] =useState(false);
  const emailRef= useRef(null);

const [email, setEmail] = useState(window.localStorage.getItem("email")||"");
const [sent,setSent] = useState(false);
const actionCodeSettings = {
  url:'localhost:3000'
}

  
  const [Events, setEvents]=useState([]);
  const  [Clubs,setClubs]=useState([]);
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
  
  const ref1 = firebase.firestore().collection("Events");
  const ref2 = firebase.firestore().collection("Clubs");

   
 
  function getEvents(){

    ref1.get().then((item)=>{
      const items =item.docs.map((doc)=> doc.data());
      setEvents(items);

    })
  
  }


  function getClubs(){

    ref2.get().then((item)=>{
      const items =item.docs.map((doc)=> doc.data());
      setClubs(items);
    })

  }

  function addEvents(){
    
    ref1.doc().set(data);
  
  }
  function addClubs(){
    ref2.doc().set(data2);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(data);
  }
  
  const signIn=
      async () => {
          
          
          setEmail(emailRef.current.value);
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
            window.localStorage.setItem("email",emailRef.current.value)
            setSent(true);
        })
        
        .catch((err) => {
            console.log(err);
            console.log(email+" debug")
            
          });
    }
  };
  
  function statusCheck(){
    if(auth.isSignInWithEmailLink(window.location.href)){
      auth.signInWithEmailLink(email,window.location.href)
      setSigned(true);
    }

  }

  

  useEffect(()=>{
    getEvents();
    getClubs();
    statusCheck();
  },[]);
  

  

  return (
  <div className="appBg">
    <div className="appview">
      <h1>UBCO Club App</h1>
      {signed&&<h3>Logged in!<br></br> User : {email}</h3>}
      {sent&& <h4>Sign-link sent to {email}</h4>}
      {!signed&&
      <form acton="">
      <h3> Club Email Login :</h3>
      <input ref={emailRef} type="email"></input>
      <button type="button" onClick={signIn}>Login</button>
      </form>}

      <h2>Upcoming Events</h2>

     
      

      <div className="container">
      {Events.map((ev)=>
      <Event name={ev.eName} date={ev.eDate} location={ev.eLocation} time={ev.eTime} desc={ev.eDesc}></Event>
      
      )}
      </div>

      <div className="ClubHeading">Clubs</div>
      <br></br>
      <div className="container">
      {Clubs.map((cl)=>
      <Club name={cl.cName} Desc={cl.cDesc} socials={cl.cSocials} website={cl.cWebsite}></Club>
      )}
      </div>
      
      {signed && 
      <div>

      <h3>Add New Event </h3>
      <div className="container">
      <h5>Enter Event Name </h5>
      <input type="text" value={data.eName} onChange={e =>setData({...data,eName:e.target.value})} />
      <h5>Enter Event Date</h5>
      <input type="text" value={data.eDate} onChange={e =>setData({...data,eDate:e.target.value})} />
      <h5>Enter Event Description</h5>
      <input type="text" value={data.eDesc} onChange={e =>setData({...data,eDesc:e.target.value})} />
      <button onClick={e =>addEvents()}>ADD</button>
      </div>

      <h3>Register New Club </h3>
      <div className="container">
      <h5>Enter Club Name </h5>
      <input type="text" value={data2.cName} onChange={e =>setData2({...data2,cName:e.target.value})} />
      <h5>Enter Club Description</h5>
      <input type="text" value={data2.cDesc} onChange={e =>setData2({...data2,cDesc:e.target.value})} />
      <h5>Enter Club Socials</h5>
      <input type="text" value={data2.cSocials} onChange={e =>setData2({...data2,cSocials:e.target.value})} />
      <button onClick={e =>addClubs()}>
       Add
      </button>
      </div>

      </div>
      }
      
      
     
      
    </div>
    
  </div>
    
  );
}

export default App;
