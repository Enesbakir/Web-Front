import React from 'react'
import '../App.css';
import { useState } from 'react';
import Navbar from './Navbar';

const URL = "https://geomodule.herokuapp.com/api/"
export default function Register() {
  const [user_email, setEmail] = useState("");
  const [user_password, setUserpassword] = useState("");
  const [user_name, setUsername] = useState("");
  const [user_surname, setUsersurname] = useState("");
  const [user_role, setUserrole] = useState("");
  const name = sessionStorage.getItem("name");
  const role = sessionStorage.getItem("role");
  const surname = sessionStorage.getItem("surname");
  const user = {
        "user_name": user_name,
        "user_surname": user_surname,
        "user_email": user_email,
        "user_password":user_password,
        "user_role": user_role
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL + 'auth/register', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then((response) => {
      if(response.ok){
        console.log("response OK");
        window.location.href = "/register";
      }
    });
  }

  return (
    <div>
      <Navbar
      name={name}
      surname={surname}
      role={role}
      ></Navbar>
      <div className='div-login'>
        <h1 className='h1-login-title'>
              REGISTER
          </h1>
        <form className='form-register' onSubmit={handleSubmit}>
          <label className='label-login' for="name" >USER NAME</label>
          <br></br>
          <input
          className='input-login'
          placeholder='Enter user name'
          id='name'
          type="text" 
          value={user_name}
          onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
          <br/>
          <label className='label-login' for="surname" >USER SURNAME</label>
          <br></br>
          <input
          className='input-login'
          placeholder='Enter user surname'
          id='surname'
          type="text" 
          value={user_surname}
          onChange={(e) => setUsersurname(e.target.value)}
          />
          <br/>
          <br/>
          <label className='label-login' for="role" >USER ROLE</label>
          <br></br>
          <input
          className='input-login'
          placeholder='Enter user role'
          id='role'
          type="text" 
          value={user_role}
          onChange={(e) => setUserrole(e.target.value)}
          />
          <br/>
          <br/>
          <label className='label-login' for="mail" >USER EMAIL</label>
          <br></br>
          <input
          className='input-login'
          placeholder='Enter user email'
          id='mail'
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
          <input className='input-submit' type="submit" value={"SIGN UP"} />

        </form>
      </div>
    </div>
  )
}
