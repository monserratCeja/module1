import {
	EDIT_COURSE,
	DELETE_COURSE,
	ADD_COURSE,
	GET_COURSES,
} from './types.js';

export const coursesInitialState = { courses: [] };

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		case EDIT_COURSE:
			console.log('Edit reducer ', action.payload.id);
			return action.payload;

		case ADD_COURSE:
			console.log('Add reducer ', action.payload);
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
