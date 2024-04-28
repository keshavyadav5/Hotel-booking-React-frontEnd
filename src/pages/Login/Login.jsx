import React, { useState } from 'react'
import './Login.css'
import { MdMarkEmailRead, MdPassword } from "react-icons/md";
import { IoPerson } from "react-icons/io5";



function Login() {
  const [action, setAction] = useState("Sign Up")
  return (
    <div className='login-father'>
      <div className='login-container'>
        <div className="login-header">
          <div className="login-text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="login-inputs">
          {action === "Login" ? <></> : <div className="login-input">
            <IoPerson className='login-icon' />
            <input type="text" name="" id="" className='login-inp' placeholder='Full Name' required />
          </div>}

          <div className="login-input">
            {<MdMarkEmailRead className='login-icon' />}
            <input type="email" className='login-inp' placeholder='Email' required />
          </div>
          <div className="login-input">
            <MdPassword className='login-icon' />
            <input type="password" className='login-inp' placeholder='password' required />
          </div>
        </div>
        {action === "Sign UP" ? <></> : <div className="forgot-password">forgot password?<span>click here</span></div>}
        <div className="login-submit-container">
          <div className={action == "Login" ? "login-submit gray" : "login-submit"} onClick={() => { setAction("Sign UP") }} >Sign Up</div>
          <div className={action == "Sign UP" ? "login-submit gray" : "login-submit"} onClick={() => { setAction("Login") }}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default Login