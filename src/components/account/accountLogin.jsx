import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import "./accountLogin.css"

function AccountLogin({setLoginUser}) {
  let navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const login = () => {
    axios.post("http://localhost:8000/login", user)
      .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        navigate("/")
      })
  }
  return (
    <div className='login'>
      {console.log(user)}
      <h1>Login</h1>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter your Email' />
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='Enter your password' />
      <div className="button" onClick={login}>Login</div>
      <div className="">or</div>
      <div className="button" onClick={() => navigate("/register")}>Register</div>
    </div>
  )
}

export default AccountLogin