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
