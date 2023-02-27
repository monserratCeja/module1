import React, { useState, useEffect } from 'react';

function usePostRegistration(url, name, password, email) {
	const [data, setData] = useState([]);

	const postData = async () => {
		const newUser = {
			name,
			password,
			email,
		};

		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();
	};

	useEffect(() => {
		postData();
	}, [url]);

	return data;
}
export default usePostRegistration;
