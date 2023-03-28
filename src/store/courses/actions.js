import {
	ADD_COURSE,
	DELETE_COURSE,
	SAVE_COURSES,
	GET_COURSES,
} from './types.js';

export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const deleteCourseAction = (payload) => ({
	type: DELETE_COURSE,
	payload,
});
export const saveCoursesAction = (payload) => ({ type: SAVE_COURSES, payload });
export const getCoursesAction = (payload) => ({ type: GET_COURSES, payload });

export function getCoursesThunk() {
	return (dispatch, getState) => {
		return fetch('http://localhost:4000/courses/all')
			.then((response) => response.json())
			.then((response) => dispatch(getCoursesAction(response.result)));
	};
}
