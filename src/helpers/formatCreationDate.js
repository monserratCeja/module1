export function formatCreationDate() {
	let date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let currentDate = '';

	if (month < 10) {
		currentDate = `${day}/0${month}/${year}`;
	} else {
		currentDate = `${day}/${month}/${year}`;
	}
	return currentDate;
}
