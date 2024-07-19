import React, { useState } from "react";

import './login-registration.css'
import { useNavigate } from "react-router-dom";



const Login = () => {

  const usrData = localStorage.getItem('registrationData')
  const usrDatas =JSON.parse(usrData);
  const navigate = useNavigate()
  const [usrLogin,setUsrLogin] = useState({
    email: '',
    pass:'',
  })
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const {name,value} = e.target;
    setUsrLogin({...usrLogin, [name]: value})
  }

  const validate = () => {
    const newErrors = {};
    if (!usrLogin.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(usrLogin.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!usrLogin.pass) newErrors.pass = "Password is required";
    return newErrors;
  };

  
  const handleSignUp = () => {
    navigate('/registration')
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      if (usrDatas) {
        if (usrDatas.email === usrLogin.email && usrDatas.pass === usrLogin.pass) {
          localStorage.setItem('isUser',JSON.stringify(true))
          navigate('/');
        }else{
          alert("Your email or password invalid")
        }
      }
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  return (
    <div className="landing-page">
      <div className="left-side">
        <div className="overlay"></div>
      </div>
      <div className="right-side">
        <div className="content">
          <div className="logo">yourlogo</div>
          <h1>
            Hello, <br />
            welcome!
          </h1>
          <form>
            <input type="email" placeholder="Email address" name="email" value={usrLogin.email} onChange={handleChange} />
            {errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}
            <input type="password" placeholder="Password" name="pass" value={usrLogin.pass} onChange={handleChange}/>
            {errors.email && (
              <div className="text-danger">{errors.pass}</div>
            )}
            <div className="actions">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="/">Forgot password?</a>
            </div>
            <div className="buttons">
              <button type="button" className="login-button" onClick={handleLogin}>
                Login
              </button>
              <button type="button" className="signup-button" onClick={handleSignUp}>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
