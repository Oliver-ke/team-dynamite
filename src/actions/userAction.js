import { ADD_USER, ADD_USER_ERROR, ADD_USER_LOADING } from './types';
import makeUrl from '../utils/makeUr';
import axios from 'axios';

export const addUser = (userData) => (dispatch) => {
	const token = localStorage.getItem('jwtToken');
	const url = makeUrl('api/v1/admin/user');
	if (!token) {
		return dispatch({ type: ADD_USER_ERROR, payload: 'Please login' });
	}

	const header = {
		Authorization: `Bearer ${token}`,
	};
	const res = axios.post(url, userData, header);
};
