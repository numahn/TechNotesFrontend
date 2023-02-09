import React from 'react'
import '../css/Home.css'
//Mui Components
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div className='logo'>
        <span className="firstHalf">Tech</span>Notes
      </div>
      <div className='blurb'>
        Tech Notes is a free-to-use website where you can create your own notes!
        Simply create an account, log in, and use our online editing software to check and keep
        your notes anywhere you go!
      </div>
      <div className='buttons'>
          <button className='button signup' onClick={() => navigate("/signup")}>Sign Up</button>
          <button className='button login' onClick={() => navigate("/login")}>Log In</button>
      </div>
    </>
  )
}
