import { SAVE_COURSES, DELETE_COURSE, ADD_COURSE } from './types.js';

export const coursesInitialState = [];

// Use the initialState as a default value
export const coursesReducer = (state = coursesInitialState, action) => {
	// The reducer normally looks at the action type field to decide what happens
	switch (action.type) {
		case SAVE_COURSES:
			return action.payload;

		case ADD_COURSE:
			// eslint-disable-next-line no-undef
			return [...state, action, payload];

		default:
			// If this reducer doesn't recognize the action type, or doesn't
			// care about this specific action, return the existing state unchanged
			return state;
	}
};
