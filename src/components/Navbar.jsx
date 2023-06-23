import React from 'react'
import "../css/navbar.css"
export default function Navbar() {
  return (
    <>
      <div className='nav'>
        <img className='nav-logo' src='TN.png' alt='logo'></img>
        <div className='nav-username'>
          <p className='nav-dropdown'>Username</p>
        </div>
      </div>
    </>
  )
}
