//import { mockedAuthorsList } from '../constants';
export function getUserName(state, idNumber) {
	const userFiltered = state.filter((item) => item.id === idNumber);
	return userFiltered[0].name;
}
