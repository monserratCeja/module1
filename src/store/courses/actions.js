import {
	ADD_COURSE,
	DELETE_COURSE,
	EDIT_COURSE,
	GET_COURSES,
} from './types.js';

export const addCourseAction = (payload) => ({ type: ADD_COURSE, payload });
export const deleteCourseAction = (payload) => ({
	type: DELETE_COURSE,
	payload,
});
export const editCourseAction = (payload) => ({ type: EDIT_COURSE, payload });
export const getCoursesAction = (payload) => ({ type: GET_COURSES, payload });

export function getCoursesThunk() {
	return (dispatch, getState) => {
		return fetch('http://localhost:4000/courses/all')
			.then((response) => response.json())
			.then((response) => dispatch(getCoursesAction(response.result)));
	};
}
