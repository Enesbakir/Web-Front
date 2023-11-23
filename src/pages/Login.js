import React from 'react'
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URL = "https://geomodule.herokuapp.com"
export default function Login(props) {
  const navigate = useNavigate();
  const [user_email, setEmail] = useState("");
  const [user_password, setUserpassword] = useState("");
  const [hataliGiris, setHataliGiris] = useState(false);
  const [userGiris, setUserGiris] = useState(false)
  const user = {
    "user_email": user_email,
    "user_password": user_password 
  }
  const handleSubmit = (event) => {
    console.log(user_email + user_password)
    event.preventDefault();
    fetch(URL + '/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    
    })
    .then((res) => res.json())
    .then((response) => {

      if(response.status == "success"){
        console.log("response OK");
        if(response.data.user_role != "user"){
          window.location.href = "/profile";
          sessionStorage.setItem("name", response.data.user_name);
          sessionStorage.setItem("surname", response.data.user_surname);
          sessionStorage.setItem("role", response.data.user_role);
          sessionStorage.setItem("email", response.data.user_email);
        }else{
          setHataliGiris(false);
          setUserGiris(true);
        }
      }else{
        setUserGiris(false);
        setHataliGiris(true);
      }
    });
  }

  return (
    <div className='div-login'>
      <h1 className='h1-homepage-title'>
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
        {userGiris ? <h4 style={{color:"red"}}>Users can not login this page!</h4> : null}
        <br/>
        <br/>
        <input className='input-submit' type="submit" value={"LOGIN"} />
        
        {hataliGiris ? <h4 style={{color:"red"}}>Wrong password or username!</h4> : null}
      </form>
    </div>
  )
}
