import './App.css';
import Button from './common/Button/Button';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { useEffect, useState } from 'react';

function App() {
	const [createCoursesView, setCreateCoursesView] = useState(true);
	const [coursesListArr, setCoursesListArr] = useState(mockedCoursesList);
	const [authorsListArr, setAuthorsListArr] = useState(mockedAuthorsList);

	function addNewCoursePressed(e) {
		setCreateCoursesView(!createCoursesView);
		console.log('function activated');
	}
	function CancelNewCoursePressed(e) {
		setCreateCoursesView(!createCoursesView);
		console.log(createCoursesView);
	}
	function createAuthor(newAuthor, newId) {
		console.log(newAuthor);
		console.log(newId);
		setAuthorsListArr((prevValue) => [
			...prevValue,
			{ id: newId, name: newAuthor },
		]);
	}
	function saveCoursePressed(
		newId,
		newTitle,
		newDescription,
		dateCreated,
		newDuration,
		newAuthors
	) {
		if (newTitle.length === 0) {
			alert('Please add a Title');
		} else if (newDescription.length === 0) {
			alert('Please add a Description');
		} else if (newDuration.length === 0) {
			alert('Please add a Duration');
		} else if (newAuthors.length === 0) {
			alert('Please select the course authors');
		} else {
			console.log('Save course clicked');
			console.log(newId);
			console.log(newTitle);
			console.log(newDescription);
			console.log(newDuration);
			console.log(newAuthors);
			setCreateCoursesView(!createCoursesView);
			setCoursesListArr((prevValue) => [
				...prevValue,
				{
					id: newId,
					title: newTitle,
					description: newDescription,
					creationDate: dateCreated,
					duration: newDuration,
					authors: newAuthors,
				},
			]);
		}
	}

	/*useEffect(() => {
		console.log(authorsListArr);
	}, [authorsListArr]);*/
	useEffect(() => {
		console.log(coursesListArr);
	}, [coursesListArr]);

	return (
		<div className='App'>
			<Header userName={coursesListArr[0].name} />
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
			)}
		</div>
	);
}

export default App;
