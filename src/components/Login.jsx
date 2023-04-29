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
                            <input className="user-form form-username" id="username" placeholder='Username'/>
                        </div>
                        <div>
                            <input className="user-form form-password" type="password" id="password" placeholder='Password'/>
                        </div>
                        <div className="form-button">
                            <input type='submit' className='submit' value="Log In"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}