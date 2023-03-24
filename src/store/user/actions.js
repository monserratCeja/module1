import { DELETE_USER, GET_USER } from './types';

export const DeleteAUserAction = (payload) => ({ type: DELETE_USER, payload });
export const getUserAction = (payload) => ({ type: GET_USER, payload });
