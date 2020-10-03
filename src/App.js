/* global gapi */


import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function onSignin(googleUser){
  console.log("---", googleUser);
}

function onSignOut(){
  var auth = gapi.auth2.getAuthInstance();
  auth.signOut().then(()=> {
    console.log("User signed out")
  })
}

function onFailure(err) {
  console.log(err)
}

function App() {

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
      client_id: "add your client id here"
  }).then(() => {
      window.gapi.signin2.render('my-signIn', {
        'scope': 'profile email',
        'width': 250,
        'height': 50,
        'longtitle': false,
        'theme': 'dark',
        'onsuccess': onSignin,
        'onfailure': onFailure
      })
    }) 
    })
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div id="my-signIn"></div>
        <div onClick={onSignOut}>Sign out from google</div>
      </header>
    </div>
  );
}

export default App;
