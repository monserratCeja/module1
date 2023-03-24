import { DELETE_USER, GET_USER } from './types';

export const userInitialState = { user: [] };

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case DELETE_USER:
			return [userInitialState];
		case GET_USER:
			return { ...state, user: action.payload };

		default:
			return state;
	}
};
