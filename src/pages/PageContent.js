import React from 'react'
import Navbar from './Navbar'

export default function 
() {
  const name = sessionStorage.getItem("name");
  const role = sessionStorage.getItem("role");
  const surname = sessionStorage.getItem("surname");
  return (
    <div>
        <Navbar 
        name={name}
        surname={surname}
        role={role}
        >
            
        </Navbar>
    </div>
  )
}
