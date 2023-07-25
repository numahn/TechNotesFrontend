import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/login.css"

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const LogInInfo = {
        username: username,
        password: password
    }

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(LogInInfo)
    }

    const handleClick = async (e) => {
        const response = await fetch('http://localhost:3001/login', requestOptions)
        const data = await response.json()
        e.preventDefault()
        if(data.success){
            navigate("/list")
        }
        else{
           document.querySelector(".error").innerHTML = data.message
        }
    }

    return (
        <>
            <div className="container">
                <div className="login-wrap">
                    <div className='login-title'>
                        Log In
                    </div>
                    <div className='login-form'>
                        <div>
                            <input className="user-form form-username" id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div>
                            <input className="user-form form-password" type="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-button">
                            <input type='submit' className='submit' value="Log In" onClick={(e) => handleClick(e)}/>
                        </div>
                        <div className='error'>test</div>
                    </div>
                </div>
            </div>
        </>
    )
}