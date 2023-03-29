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
			const idCourseEdited = action.payload.id;
			const newStateEdited = state.courses.map((item) =>
				item.id === idCourseEdited ? { ...item, item: action.payload } : item
			);
			console.log('Edit reducer ', newStateEdited);
			console.log('Edit action payload ', action.payload);
			return { ...state, courses: newStateEdited };

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
