
import "./login.style.scss";

import React, { useState, useEffect, useRef } from 'react';


function Login() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let button = useRef(null);


  const login = () => {
    console.log('username: ' + username);
    console.log('password: ' + password);
  };

  useEffect(() => {
    document.title = 'Login Page';
  });

  const handleLoginGoogle = async () => {
  
  };

  return (
    <div className="login">
      <div className="login__form">
        <h1>Sign In</h1>

        <div className="login__form__social">
        
          <h1></h1>
          <label
            className="icon-google"
            for="login-button"
            onClick={() => {
              handleLoginGoogle();
            }}
          >
            <img
              ref={button}
              src="https://colorlib.com/etc/lf/Login_v5/images/icons/icon-google.png"
              alt=""
            />
            <h3>Sign in with @fpt.edu.vn</h3>
          </label>
        </div>

        <div className="login__form__input">
          <div className="username">
            <h4>Username</h4>
            <input
              type="text"
              onChange={event => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="password">
            <h4>Password</h4>
            <input
              type="password"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="login__form__submit">
          <button
            onClick={event => {
              login();
            }}
          >
            <h4>Sign In</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
