import { useState } from 'react';
import { mockedCoursesList } from '../constants';

function useCourseList() {
	const [coursesListArr, setCoursesListArr] = useState(mockedCoursesList);

	return { coursesListArr, setCoursesListArr };
}

export default useCourseList;
