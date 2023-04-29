import React from "react";
import "../css/signup.css";

export default function Login() {
  return (
    <>
      <div className="signup-container">
        <div className="signup-wrap">
          <div className="signup-title">Sign Up</div>
          <div className="signup-form">
            <div>
              <input className="user-form form-username" id="username" placeholder="Username"></input>
            </div>
            <div>
              <input className="user-form form-password"type="password"id="password"placeholder="Password"/>
            </div>
            <div className="form-button">
              <input type="submit" className="submit" value="Log In"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
