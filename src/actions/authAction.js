import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER, AUTH_ERROR, AUTH_LOADING, CLEAR_AUTH_ERROR } from './types';
import axios from 'axios';
import makeUrl from '../utils/makeUr';

export const loginUser = (userData) => async (dispatch) => {
	const uri = makeUrl('api/v1/user/login');
	dispatch({ type: AUTH_LOADING });
	try {
		const { data } = await axios.post(uri, userData);
		const { token, ...rest } = data;
		localStorage.setItem('jwtToken', token);
		const user = jwtDecode(token);
		return dispatch({ type: SET_CURRENT_USER, payload: { user, token, ...rest } });
	} catch (error) {
		if (error.isAxiosError && error.response.status === 401) {
			const data = error.response.data;
			return dispatch({ type: AUTH_ERROR, payload: data });
		}
		return dispatch({ type: AUTH_ERROR, payload: { error: 'Incorrect password or email' } });
	}
};

export const clearAuthError = () => (dispatch) => {
	dispatch({ type: CLEAR_AUTH_ERROR });
};
