import { ADD_USER, ADD_USER_LOADING, ADD_USER_ERROR } from './types';

const initialState = {
	userDetails: null,
	loading: false,
	error: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case ADD_USER_LOADING:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
