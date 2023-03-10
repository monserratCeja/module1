import { GET_AUTHORS, ADD_AUTHOR } from './types';

export const addAuthorAction = (payload) => ({ type: ADD_AUTHOR, payload });
export const getAuthorsAction = (payload) => ({ type: GET_AUTHORS, payload });
