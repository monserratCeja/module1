export function getCoursesDuration(totalMinutes) {
	const minutes = totalMinutes % 60;
	const hours = Math.floor(totalMinutes / 60);

	return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

export function padTo2Digits(num) {
	return num.toString().padStart(2, '0');
}
