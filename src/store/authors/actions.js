import { GET_AUTHORS, ADD_AUTHOR } from './types';

export const addAuthorAction = (payload) => ({ type: ADD_AUTHOR, payload });
export const getAuthorsAction = (payload) => ({ type: GET_AUTHORS, payload });

export function getAuthorsThunk() {
	return (dispatch, getState) => {
		return fetch('http://localhost:4000/authors/all')
			.then((response) => response.json())
			.then((response) => dispatch(getAuthorsAction(response.result)));
	};
}
