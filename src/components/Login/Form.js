import React, { useState, useEffect } from 'react';
import CustomAlert from '../Common/Alert';
import Spinner from '../Common/Spinner';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, clearAuthError } from '../../actions/authAction';

const Form = ({ loginUser, auth, history, clearAuthError }) => {
	const [ inputs, setInputs ] = useState({
		email: '',
		password: '',
	});
	const handleChange = (e) => {
		const { value, name } = e.target;
		return setInputs({ ...inputs, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputs.email || !inputs.password) {
			return 'error';
		}
		return loginUser(inputs);
	};
	useEffect(
		() => {
			if (auth.isAuthenticated) {
				history.push('/dashboard');
			}
		},
		[ auth.isAuthenticated, history ],
	);
	const { loading, error } = auth;
	return (
		<form onSubmit={handleSubmit}>
			{error && (
				<CustomAlert closeHandler={clearAuthError} type="danger" content={Object.values(error)[0]} state={!!error} />
			)}
			{loading && <Spinner />}
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					required
					type="email"
					name="email"
					value={inputs.email}
					onChange={handleChange}
					placeholder="Enter your email"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					required
					name="password"
					value={inputs.password}
					onChange={handleChange}
					type="password"
					placeholder="Enter your Password"
				/>
			</div>
			<button type="submit">Login</button>
		</form>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, clearAuthError })(withRouter(Form));
