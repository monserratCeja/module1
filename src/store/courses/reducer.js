import {
	SAVE_COURSES,
	DELETE_COURSE,
	ADD_COURSE,
	GET_COURSES,
} from './types.js';

export const coursesInitialState = { courses: [] };

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case SAVE_COURSES:
			return action.payload;

		case ADD_COURSE:
			return { ...state, courses: [...state.courses, action.payload] };

		case DELETE_COURSE:
			const idCourse = action.payload;
			const newState = state.courses.filter((item) => item.id !== idCourse);
			return { ...state, courses: newState };

		case GET_COURSES:
			return { ...state, courses: action.payload };

		default:
			return state;
	}
};
