import React from 'react';
import Logo from '../../images/logo.png';
import LoginImage from '../../images/login.png';
import './login.css';

const Login = () => {
  return (
    <React.Fragment>
      <div className="login-header">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="login-container">
        <div className="left-content">
          <img src={Logo} alt="Logo" />

          <h1>Send and Recieve Panic Messages</h1>

          <p>
            Not just in anytime but in <span>Real Time</span>
          </p>
        </div>
        <div className="right-content">
          <img src={LoginImage} alt="Log in Icon" />

          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
