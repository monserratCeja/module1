import React, { useState, useEffect } from 'react';
import { mockedAuthorsList } from '../constants';

function useAuthorsList() {
	const [authorsListArr, setAuthorsListArr] = useState(mockedAuthorsList);

	return { authorsListArr, setAuthorsListArr };
}

export default useAuthorsList;
