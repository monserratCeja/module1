import {
	SAVE_COURSES,
	DELETE_COURSE,
	ADD_COURSE,
	GET_COURSES,
} from './types.js';

//En reducers se pone el valor inicial del store
export const coursesInitialState = { courses: [] };

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case SAVE_COURSES:
			return action.payload;

		case ADD_COURSE:
			// eslint-disable-next-line no-undef
			return {
				...state,
				courses: [...state.courses, action.payload],
			};

		case DELETE_COURSE:
			// eslint-disable-next-line no-undef
			return [coursesInitialState];

		case GET_COURSES:
			return { ...state, courses: action.payload };

		default:
			return state;
	}
};
