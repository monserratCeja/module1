import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk(
	'courses/fetchCourses',
	async () => {
		const response = await fetch('http://localhost:4000/courses/all');
		const data = await response.json();
		console.log('get data');
		console.log(data.result);
		return data.result;
	}
);
