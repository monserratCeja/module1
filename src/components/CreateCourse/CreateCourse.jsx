import React, { useState, useEffect } from 'react';
import CreateCourseForm from './components/CreateCourseForm/CreateCourseForm';
import Input from '../../common/Input/Input';
import styles from './CreateCourse.css';
import Button from '../../common/Button/Button';
import Duration from './components/Duration/Duration';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import { getCoursesDuration } from '../../helpers/getCoursesDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';
import { v4 as uuidv4 } from 'uuid';

function CreateCourse(props) {
	const forbiddenSymbols = /[@#$%^&]/;
	const [newAuthor, setNewAuthor] = useState('');
	const [newId, setNewId] = useState(uuidv4());
	const [newCourseId, setNewCourseId] = useState(uuidv4());
	const [newDuration, setNewDuration] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [dateCreated, setDateCreated] = useState(formatCreationDate());

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
		props.createAuthor(newAuthor, newId);
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
		<div className='createCourse--grid'>
			<div className='grid-col-span-2'>
				<div className='CreateCourse--flex'>
					<div>
						<h2>Add new course</h2>
					</div>
					<div className='CreateCourse--topElementButtons'>
						<Button
							buttonText='Cancel'
							handleClick={props.handleClickCancelCreate}
						/>
						<Button
							buttonText='Save Course'
							handleClick={() =>
								props.handleClickSaveCourse(
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
					authorsList={props.authorsList}
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
	);
}
export default CreateCourse;
