import React, { useState } from 'react';
import axios from 'axios';
import makeUrl from '../../utils/makeUr';

const Users = ({ addUser }) => {
	const [ inputs, setInputs ] = useState({
		firstName: '',
		lastName: '',
		email: '',
		houseNumber: '',
		houseAddress: '',
		phone: '',
		password: '',
	});

	const sendRequest = async (data) => {
		const uri = makeUrl('api/v1/admin/user');
		const token = localStorage.getItem('jwtToken');
		const header = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const res = await axios.post(uri, data, header);
			console.log(res);
		} catch (error) {
			console.log({ ...error });
		}
	};

	const userFormSubmit = (e) => {
		e.preventDefault();
		const submitData = {
			firstName: inputs.firstName,
			lastName: inputs.lastName,
			email: inputs.email,
			houseNumber: inputs.houseNumber,
			houseAddress: inputs.houseAddress,
			phone: inputs.phone,
			password: inputs.password,
		};
		return sendRequest(submitData);
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		return setInputs({ ...inputs, [name]: value });
	};
	return (
		<div>
			<form className="user-form" onSubmit={userFormSubmit}>
				<input
					type="text"
					name="firstName"
					value={inputs.firstName}
					onChange={handleChange}
					placeholder="First Name..."
				/>
				<input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name" />
				<input type="email" name="email" value={inputs.email} onChange={handleChange} placeholder="Email" />
				<input
					type="number"
					name="houseNumber"
					value={inputs.houseNumber}
					onChange={handleChange}
					placeholder="House Number"
				/>
				<input
					type="text"
					name="houseAddress"
					value={inputs.houseAddress}
					onChange={handleChange}
					placeholder="House Address"
				/>
				<input type="number" name="phone" value={inputs.phone} onChange={handleChange} placeholder="Phone Number" />
				<input tyoe="password" name="password" value={inputs.password} onChange={handleChange} placeholder="Password" />
				<button type="submit">Create User</button>
			</form>
		</div>
	);
};

export default Users;
