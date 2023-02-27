import React, { useState } from 'react';

function useLocalStorage() {
	const [token, setToken] = useState('');
	const [userName, setUserName] = useState('');

	return { token, setToken, userName, setUserName };
}
