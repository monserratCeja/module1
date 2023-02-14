import { mockedAuthorsList } from '../constants';
export function getUserName(idNumber) {
	const userFiltered = mockedAuthorsList.filter((item) => item.id === idNumber);
	return userFiltered[0].name;
}
