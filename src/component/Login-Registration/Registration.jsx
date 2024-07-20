import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [usrRegistration, setUsrRegistration] = useState({
    id: Math.floor(Date.now() / 1000),
    name: '',
    email: '',
    pass: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsrRegistration({ ...usrRegistration, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!usrRegistration.name) newErrors.name = "Name is required";
    if (!usrRegistration.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(usrRegistration.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!usrRegistration.pass) newErrors.pass = "Password is required";
    return newErrors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const existingData = localStorage.getItem('registrationData');
      const registrations = existingData ? JSON.parse(existingData) : [];
      registrations.push(usrRegistration);
      localStorage.setItem('registrationData', JSON.stringify(registrations));
      navigate('/login');
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
          <h1>
            Register,<br />
            here...!
          </h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={usrRegistration.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-danger">{errors.name}</div>
            )}
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={usrRegistration.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="pass"
              value={usrRegistration.pass}
              onChange={handleChange}
            />
            {errors.pass && (
              <div className="text-danger">{errors.pass}</div>
            )}
            <div className="actions">
            </div>
            <div className="buttons">
              <button
                type="submit"
                className="login-button"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
