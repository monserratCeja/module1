export const getCourses = async () => {
	const response = await fetch('http://localhost:4000/courses/all');
	const data = await response.json();
	return data.result;
};

export const getAuthors = async () => {
	const response = await fetch('http://localhost:4000/authors/all');
	const data = await response.json();
	return data.result;
};
