import React from 'react'
import "../css/navbar.css"
export default function Navbar() {
  return (
    <>
      <div className='nav'>
        <img className='nav-logo' src='TN.png' alt='logo'></img>
        <div className='nav-username'>
          <p className='dropdown-username'>Username</p>
          {/* Think about what to use Dropdown for <img className="nav-dropdown" src="Dropdown.png"></img> */}
        </div>
      </div>
    </>
  )
}
