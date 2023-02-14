import './App.css';
import Button from './common/Button/Button';
import Logo from './components/Header/components/Logo/Logo';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { useState } from 'react';

function App() {
	const [createCoursesView, setCreateCoursesView] = useState(true);
	const [coursesListArr, setCoursesListArr] = useState(mockedAuthorsList);
	const [authorsListArr, setAuthorsListArr] = useState(mockedAuthorsList);

	function addNewCoursePressed(e) {
		setCreateCoursesView(!createCoursesView);
		console.log('function activated');
	}
	function CancelNewCoursePressed(e) {
		setCreateCoursesView(!createCoursesView);
		console.log(createCoursesView);
	}
	function createAuthor({ newAuthor }) {
		setAuthorsListArr(...authorsListArr, newAuthor);
	}

	return (
		<div className='App'>
			<h1>{coursesListArr[0].name}</h1>
			<Header userName='Dave' />
			{createCoursesView ? (
				<CreateCourse
					handleClickCreateAuthor={createAuthor}
					authorsList={mockedAuthorsList}
					handleClickCancelCreate={CancelNewCoursePressed}
				/>
			) : (
				<Courses
					coursesList={mockedCoursesList}
					authorsList={mockedAuthorsList}
					handleClickCreateCourse={addNewCoursePressed}
				/>
			)}
		</div>
	);
}

export default App;
