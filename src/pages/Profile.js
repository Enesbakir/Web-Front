import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
export default function Profile(props) {
  const [user_email, setEmail] = useState(sessionStorage.getItem("email"));
  const [user_name, setUsername] = useState(sessionStorage.getItem("name"));
  const [user_surname, setUsersurname] = useState(sessionStorage.getItem("surname"));
  const [user_role, setUserrole] = useState(sessionStorage.getItem("role"));
  const name = sessionStorage.getItem("name");
  const role = sessionStorage.getItem("role");
  const surname = sessionStorage.getItem("surname");

  return (
    <div>
        <Navbar
        name={name}
        surname={surname}
        role={role}>

        </Navbar>
        <div className='div-login'>
            <h1 className='h1-login-title'>
                PROFILE
            </h1>
            <br/>
        <br/>
        <form>
          <label className='label-login' for="name" >USER NAME</label>
          <br></br>
          <input
          className='input-login'
          readOnly= {true}
          id='name'
          type="text" 
          value={user_name}
          />
          <br/>
          <br/>
          <label className='label-login' for="surname" >USER SURNAME</label>
          <br></br>
          <input
          className='input-login'
          readOnly= {true}
          id='surname'
          type="text" 
          value={user_surname}
          />
          <br/>
          <br/>
          <label className='label-login' for="role" >USER ROLE</label>
          <br></br>
          <input
          className='input-login'
          readOnly= {true}
          id='role'
          type="text" 
          value={user_role}
          />
          <br/>
          <br/>
          <label className='label-login' for="mail" >USER EMAIL</label>
          <br></br>
          <input
          className='input-login'
          readOnly= {true}
          id='mail'
          type="text" 
          value={user_email}
          />
          </form>
        </div>
    </div>
  )
}
