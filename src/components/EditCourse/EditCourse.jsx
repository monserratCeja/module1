/*import React, { useState, useEffect } from 'react';
import CreateCourseForm from './components/CreateCourse/CreateCourse.jsx';
import Input from '../../common/Input/Input';
import styles from './CreateCourse.css';
import Button from '../../common/Button/Button';
import Duration from './components/Duration/Duration';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import { getCoursesDuration } from '../../helpers/getCoursesDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { v4 as uuidv4 } from 'uuid';
import useAuthorsList from '../../customHooks/useAuthorsList';
import useCourseList from '../../customHooks/useCourseList';
import { Link, useNavigate, redirect } from 'react-router-dom';
import Header from '../Header/Header';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { setAuthors } from '../../store/selectors';
import { getAuthors } from '../../services/services';
import { addCourseAction } from '../../store/courses/actions';
import { addAuthorAction, getAuthorsAction } from '../../store/authors/actions';

export default function EditCourse(props) {
	const forbiddenSymbols = /[@#$%^&]/;
	const { coursesListArr, setCoursesListArr } = useCourseList();
	const { authorsListArr, setAuthorsListArr } = useAuthorsList();

	const [newAuthor, setNewAuthor] = useState('');
	const [newId, setNewId] = useState(uuidv4());
	const [newCourseId, setNewCourseId] = useState(uuidv4());
	const [newDuration, setNewDuration] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [dateCreated, setDateCreated] = useState(formatCreationDate());

	//redux
	const navigate = useNavigate();

	const authorState = useSelector((state) => state.authors.authors);
	const dispatch = useDispatch();

	useEffect(() => {
		getAuthors().then((data) => dispatch(getAuthorsAction(data)));
	}, []);
	useEffect(() => {
		console.log('authors fetch');
		console.log(authorState);
	}, [authorState]);

	function durationOnChange(durationAdded) {
		setNewDuration((prevValue) => durationAdded);
	}

	function titleOnChange(titleAdded) {
		if (!forbiddenSymbols.test(titleAdded)) {
			setTitle(titleAdded);
		}
	}

	function descriptionOnChange(descriptionAdded) {
		if (!forbiddenSymbols.test(descriptionAdded)) {
			setDescription(descriptionAdded);
		}
	}
	function newAuthorOnChange(authorAdded) {
		if (!forbiddenSymbols.test(authorAdded)) {
			setNewAuthor(authorAdded);
		}
	}
	function submitNewAuthor(e) {
		e.preventDefault();
		const newItem = { name: newAuthor, id: newId };
		console.log('nuevo author ', newItem);
		dispatch(addAuthorAction(newItem));
		console.log(authorState);
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
			//setCreateCoursesView(!createCoursesView);
			const newItem = {
				title: newTitle,
				description: newDescription,
				creationDate: dateCreated,
				duration: newDuration,
				authors: newAuthors,
				id: newId,
			};
			navigate('../courses', { replace: true });
			//navigate('/courses');
			dispatch(addCourseAction(newItem));
		}
	}
	function selectAuthorsClicked(id) {
		console.log('id seleccionado ' + id);
		setCourseAuthors([...courseAuthors, id]);
	}
	function unselectAuthor(id) {
		console.log('author deleted ' + id);
		const authorsDeleted = courseAuthors.filter((author) => author !== id);
		setCourseAuthors(authorsDeleted);
	}

	return (
		<>
			<Header />
			<div className='createCourse--grid'>
				<div className='grid-col-span-2'>
					<div className='CreateCourse--flex'>
						<div>
							<h2>Edit Course id: </h2>
						</div>
						<div className='CreateCourse--topElementButtons'>
							<Link to='/courses'>
								<Button buttonText='Cancel' />
							</Link>

							<Button
								buttonText='Save Course'
								handleClick={() =>
									saveCoursePressed(
										newCourseId,
										title,
										description,
										dateCreated,
										newDuration,
										courseAuthors
									)
								}
							/>
						</div>
					</div>
				</div>
				<div className='grid-col-span-2'>
					<CreateCourseForm
						title={title}
						description={description}
						titleOnChange={titleOnChange}
						descriptionOnChange={descriptionOnChange}
					/>
				</div>
				<div className='AddAuthor--div'>
					<h3>Add author</h3>
					<form>
						<Input
							type='text'
							name='name'
							placeholder='Enter author name...'
							labelTitle='Author Name'
							onChange={(e) => newAuthorOnChange(e.target.value)}
							value={newAuthor}
						/>
						<Button handleClick={submitNewAuthor} buttonText='Create author' />
					</form>
					<p>
						author added: {newAuthor}, ID {newId}
					</p>
				</div>
				<div className='Authors--div'>
					<CourseAuthors
						selectedAuthors={courseAuthors}
						authorsList={authorState}
						selectAuthorsClicked={selectAuthorsClicked}
						unselectAuthor={unselectAuthor}
					/>
				</div>
				<div className='Addduration--div'>
					<Duration
						currentDuration={newDuration}
						durationOnChange={durationOnChange}
					/>
				</div>
				<div className='Authors--div'></div>
			</div>
		</>
	);
}
//export default CreateCourse;*/
