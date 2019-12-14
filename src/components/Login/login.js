import React from 'react';
import Form from './Form';
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
					<Form />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Login;
