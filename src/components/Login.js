/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div>
      <div className="main">
        <img src="" style={{ height:100,width:100 }}/>
        <h2 style={{ color: 'white' }}>Bento Social</h2>
        <input placeholder="Email" />
        <br />
        <input placeholder="Password"style={{ marginTop: 20, marginBottom: 20 }}/>
        <br />
        <button className="btn">SignIn</button>
        <p style={{color:"white"}}>OR</p>
        <button className="btn"><img src="" style={{ height:15,width:25 }}/>SignIn with Google</button>
        <br/>
        <p style={{ color: 'white' }}>Don't have an account?</p> 
        <button>SignUp</button>
        <p style={{ color: 'white',fontSize:15}}>It's completely free!!</p>
      </div>
    </div>
  );
}



