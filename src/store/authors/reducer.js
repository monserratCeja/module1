import { ADD_AUTHOR, GET_AUTHORS } from './types';

export const authorsInitialState = { authors: [] };

export const authorsReducer = (state = authorsInitialState, action) => {
	switch (action.type) {
		case ADD_AUTHOR:
			// eslint-disable-next-line no-undef
			return {
				...state,
				authors: [...state.authors, action.payload],
			};

		case GET_AUTHORS:
			return { ...state, authors: action.payload };

		default:
			return state;
	}
};
