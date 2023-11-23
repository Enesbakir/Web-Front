import React from 'react'
import '../App.css';
import { useState, useEffect } from 'react';

const URL = "https://geomodule.herokuapp.com/api/"
export default function HomePage() {
  const [user_email, setEmail] = useState("");
  const [user_password, setUserpassword] = useState("");

  const handleSubmit = (event) => {
    console.log(user_email + user_password)
    event.preventDefault();
    fetch(URL + 'auth/login', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: {
      "user_email": user_email,
      "user_password": user_password 
    }
    })
    .then((response) => {
      if(response.ok){
        console.log("response OK");
        window.location.href = "/register";
      }
    });
  }

  return (
    <div className='div-login'>
      <h1 className='h1-login-title'>
            GEO BUSINESS MODULE
        </h1>
      <br/>
      <br/>
      <form onSubmit={handleSubmit}>
        <label className='label-login' for="name" >USER MAIL</label>
        <br></br>
        <input
        className='input-login'
        placeholder='Enter your email'
        id='name'
        type="text" 
        value={user_email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <br/>
        <label className='label-login' for="password" >USER PASSWORD</label>
        <br></br>
        <input
        className='input-login'
        placeholder='Enter your password'
        id='password'
        type="password" 
        value={user_password}
        onChange={(e) => setUserpassword(e.target.value)}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <input className='input-submit' type="submit" value={"LOGIN"} />

      </form>
    </div>
  )
}
