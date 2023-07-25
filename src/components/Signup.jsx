import React from "react";
import "../css/signup.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const navigate = useNavigate()

  const signUpInfo = {
    username: user,
    password: password,
    first_name: first_name,
    last_name: last_name
  }

  const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signUpInfo)
  }

  const handleClick = async (e) => {
      const response = await fetch('http://localhost:3001/signup', requestOptions)
      const data = await response.json()
      e.preventDefault()
      if(data.success){
          navigate("/list")
      }
  }

  return (
    <>
      <div className="signup-container">
        <div className="signup-wrap">
          <div className="signup-title">Sign Up</div>
          <div className="signup-form">
            <div>
              <input className="user-form form-username" id="username" placeholder="Username" onChange={(e) => {setUser(e.target.value)}}></input>
            </div>
            <div>
              <input className="user-form form-first_name" id="first_name" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}}></input>
            </div>
            <div>
              <input className="user-form form-last_name" id="last_name" placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}}></input>
            </div>
            <div>
              <input className="user-form form-password"type="password"id="password"placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <div className="form-button">
              <input type="submit" className="submit" value="Log In" onClick={(e) => handleClick(e)}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
