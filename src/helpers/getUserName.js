//import { mockedAuthorsList } from '../constants';
export function getUserName(state, idNumber) {
	const userFiltered = state.filter((item) => item.id === idNumber);
	console.log(userFiltered[0].name);
	return userFiltered[0].name;
}
