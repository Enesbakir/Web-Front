import React, { useState } from 'react'

const URL = "https://geomodule.herokuapp.com"

export default function Navbar(props) {
  const [visible, setVisible] = useState(true)
  const logout = () => {
    fetch(URL + '/api/auth/logout', {
    method: 'POST',
    })
    .then((response) => {
      if(response.status == "success"){
        console.log("response OK");
        window.location.href = "/";
      }
    });
  }
  return (
    <div>
        <ul className='ul-navbar'>
            <li className='li-navbar'><a className='a-navbar' href='/' >Logout</a></li>
            <li className='li-navbar'><a className='a-navbar' href='/profile'>Profile</a></li>
            <li className='li-navbar'><a className='a-navbar' href='/trips'>Trip List</a></li>
            {props.role == "admin" ? <li className='li-navbar' ><a className='a-navbar' href='/register'>Register</a></li> : null}
            
            <li className='li-navbar-second'> <a className='a-navbar'>Hi, {props.name} {props.surname}</a> </li>
        </ul>
    </div>
  )
}
