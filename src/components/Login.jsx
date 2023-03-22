import React from 'react'
import "../css/login.css"

export default function Login() {
    return (
        <>
            <div className="login-container">
                <div className="login-wrap">
                    <div className='login-title'>
                        Log In
                    </div>
                    <div className='login-form'>
                        <div>
                            <label for="username">Username</label>
                            <input className="form-username" id="username" placeholder='Username'></input>
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input className="form-password" id="password" placeholder='Password'></input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
