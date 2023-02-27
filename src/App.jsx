import './App.css';
import Button from './common/Button/Button';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
	//const [token, setToken] = useState(localStorage.getItem('token'));
	const [userName, setuserName] = useState(localStorage.getItem('data'));
	const [tokenLength, setTokenLength] = useState(
		localStorage.getItem('length')
	);

	//const valueToken = localStorage.getItem('');
	//console.log(valueToken);
	console.log(tokenLength);
	//setToken();
	/*useEffect(() => {
		console.log(tokenLength);
	}, [tokenLength]);*/

	return (
		<div className='App'>
			<Outlet />
		</div>
	);
}

export default App;
/*
{createCoursesView ? (
				<CreateCourse
					createAuthor={createAuthor}
					authorsList={authorsListArr}
					handleClickCancelCreate={CancelNewCoursePressed}
					handleClickSaveCourse={saveCoursePressed}
				/>
			) : (
				<Courses
					coursesList={coursesListArr}
					authorsList={authorsListArr}
					handleClickCreateCourse={addNewCoursePressed}
				/>
			)}*/
